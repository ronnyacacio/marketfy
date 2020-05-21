module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('products', 'unitary', {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('products', 'unitary');
  },
};
