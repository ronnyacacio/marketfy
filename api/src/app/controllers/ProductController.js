import * as Yup from 'yup';

import Product from '../models/Product';
import User from '../models/User';
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

    const user = await User.findByPk(req.userId);
    if (!user) return res.status(400).json('User not exists.');

    const imageExists = await File.findByPk(req.body.image_id);
    if (!imageExists)
      return res.status(400).json({ error: 'File not exists.' });

    req.body.user_id = req.userId;

    const {
      id,
      name,
      stock,
      price,
      category,
      unitary,
      user_id,
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
      user_id,
      image,
    });
  }
}

export default new ProductController();
