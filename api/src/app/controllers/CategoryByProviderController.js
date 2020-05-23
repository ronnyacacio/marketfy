import Category from '../models/Category';
import Provider from '../models/Provider';
import File from '../models/File';

class CategoryByProviderController {
  async index(req, res) {
    const { provider_id } = req.params;

    const providerExists = await Provider.findByPk(provider_id);
    if (!providerExists) return res.status(400).json('Provider not exists.');

    const categories = await Category.findAll({
      where: {
        provider_id,
      },
      include: [
        {
          model: File,
          as: 'image',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(categories);
  }
}

export default new CategoryByProviderController();
