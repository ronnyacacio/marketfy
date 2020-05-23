import * as Yup from 'yup';

import Product from '../models/Product';
import Provider from '../models/Provider';
import File from '../models/File';
import Category from '../models/Category';

class ProductController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      stock: Yup.number().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
      unitary: Yup.boolean(),
      image_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation Fails' });

    const provider = await Provider.findByPk(req.userId);
    if (!provider)
      return res.status(400).json({ error: 'Provider not exists.' });

    const imageExists = await File.findByPk(req.body.image_id);
    if (!imageExists)
      return res.status(400).json({ error: 'File not exists.' });

    const categoryExists = await Category.findByPk(req.body.category_id);
    if (!categoryExists)
      return res.status(400).json({ error: 'Category not exists.' });

    req.body.provider_id = req.userId;

    const {
      id,
      name,
      stock,
      price,
      category,
      unitary,
      provider_id,
      image,
    } = await Product.create(req.body, {
      include: [
        {
          model: File,
          as: 'image',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json({
      id,
      name,
      stock,
      price,
      category,
      unitary,
      provider_id,
      image,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      stock: Yup.number(),
      price: Yup.number(),
      category_id: Yup.number(),
      unitary: Yup.boolean(),
      image_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation Fails' });

    if (req.body.category_id || req.body.category_id === 0) {
      const categoryExists = await Category.findByPk(req.body.category_id);
      if (!categoryExists)
        return res.status(400).json({ error: 'Category not exists.' });
    }

    if (req.body.image_id || req.body.image_id === 0) {
      const imageExists = await File.findByPk(req.body.image_id);
      if (!imageExists)
        return res.status(400).json({ error: 'File not exists.' });
    }

    const { id } = req.params;

    const product = await Product.findByPk(id);

    const { userId } = req;

    if (product.provider_id !== userId)
      return res.status(401).json({
        error: "You don't have permission to update this product",
      });

    const {
      name,
      stock,
      price,
      unitary,
      category_id,
      image_id,
      provider_id,
    } = await product.update(req.body);

    return res.json({
      id: Number(id),
      name,
      stock,
      price,
      unitary,
      category_id,
      image_id,
      provider_id,
    });
  }

  async destroy(req, res) {
    const product = await Product.findByPk(req.params.id);

    if (!product) return res.status(400).json({ error: 'Product not exists.' });

    const { userId } = req;

    if (product.provider_id !== userId)
      return res.status(401).json({
        error: "You don't have permission to destroy this product",
      });

    await product.destroy();

    return res.json();
  }
}

export default new ProductController();
