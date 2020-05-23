module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('products', 'category_id', {
      type: Sequelize.INTEGER,
      references: { model: 'categories', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('products', 'category_id');
  },
};
