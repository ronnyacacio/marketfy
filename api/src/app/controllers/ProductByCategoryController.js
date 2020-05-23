import Product from '../models/Product';

class ProductsByCategory {
  async index(req, res) {
    const { category_id } = req.params;

    const products = await Product.findAll({
      where: { category_id },
    });

    return res.json(products);
  }
}

export default new ProductsByCategory();
