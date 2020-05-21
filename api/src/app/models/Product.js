import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        stock: Sequelize.DOUBLE,
        price: Sequelize.DOUBLE,
        category: Sequelize.STRING,
        unitary: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Product;
