module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('customers', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('customers', 'email');
  },
};
