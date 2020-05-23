module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('categories', 'provider_id', {
      type: Sequelize.INTEGER,
      references: { model: 'providers', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('products', 'provider_id');
  },
};
