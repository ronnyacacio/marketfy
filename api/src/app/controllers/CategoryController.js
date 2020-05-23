import * as Yup from 'yup';

import Category from '../models/Category';
import Provider from '../models/Provider';
import File from '../models/File';

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
}

export default new CategoryController();
