import * as Yup from 'yup';

import Product from '../models/Product';
import Provider from '../models/Provider';
import File from '../models/File';

class ProductController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      stock: Yup.number().required(),
      price: Yup.number().required(),
      category: Yup.string().required(),
      unitary: Yup.boolean(),
      image_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation Fails' });

    const provider = await Provider.findByPk(req.userId);
    if (!provider) return res.status(400).json('Provider not exists.');

    const imageExists = await File.findByPk(req.body.image_id);
    if (!imageExists)
      return res.status(400).json({ error: 'File not exists.' });

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
}

export default new ProductController();
