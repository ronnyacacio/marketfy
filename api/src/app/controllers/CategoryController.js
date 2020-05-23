import * as Yup from 'yup';

import Category from '../models/Category';
import Provider from '../models/Provider';
import File from '../models/File';
import Product from '../models/Product';

class CategoryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      image_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation Fails' });

    const providerExists = await Provider.findByPk(req.userId);
    if (!providerExists) return res.status(400).json('Provider not exists.');

    const imageExists = await File.findByPk(req.body.image_id);
    if (!imageExists)
      return res.status(400).json({ error: 'File not exists.' });

    req.body.provider_id = req.userId;

    const { id, name, image, provider } = await Category.create(req.body, {
      include: [
        {
          model: File,
          as: 'image',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: Provider,
          as: 'provider',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json({ id, name, image, provider });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      image_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation Fails' });

    if (req.body.image_id || req.body.image_id === 0) {
      const imageExists = await File.findByPk(req.body.image_id);
      if (!imageExists)
        return res.status(400).json({ error: 'File not exists.' });
    }

    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category)
      return res.status(400).json({ error: 'Category not exists.' });

    const { userId } = req;

    if (category.provider_id !== userId)
      return res.status(401).json({
        error: "You don't have permission to update this product",
      });

    const { name, image_id } = await category.update(req.body);

    return res.json({ id: Number(id), name, image_id });
  }

  async destroy(req, res) {
    const category = await Category.findByPk(req.params.id);

    if (!category)
      return res.status(400).json({ error: 'Category not exists.' });

    const { userId } = req;

    if (category.provider_id !== userId)
      return res.status(401).json({
        error: "You don't have permission to destroy this product",
      });

    const { id } = req.params;

    const products = await Product.findAll({ where: { category_id: id } });

    if (!products)
      return res
        .status(400)
        .json({ error: 'There are still products in this category' });

    await category.destroy();

    return res.json();
  }
}

export default new CategoryController();
