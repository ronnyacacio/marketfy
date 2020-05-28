import Product from '../models/Product';

class ProductsByCategory {
  async index(req, res) {
    const { category_id } = req.params;

    const { userId } = req;

    const products = await Product.findAll({
      where: {
        category_id,
        provider_id: userId,
      },
      include: [
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

export default new ProductsByCategory();
