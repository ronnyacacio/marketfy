import Product from '../models/Product';
import Category from '../models/Category';
import File from '../models/File';

class ProductsByProviderController {
  async index(req, res) {
    const { userId } = req;

    const products = await Product.findAll({
      where: { provider_id: userId },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
        {
          model: File,
          as: 'image',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(products);
  }
}

export default new ProductsByProviderController();
