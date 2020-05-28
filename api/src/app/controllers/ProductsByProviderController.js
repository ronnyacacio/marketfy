import Product from '../models/Product';

class ProductsByProviderController {
  async index(req, res) {
    const { userId } = req;

    const products = await Product.findAll({
      where: { provider_id: userId },
    });

    return res.json(products);
  }
}

export default new ProductsByProviderController();
