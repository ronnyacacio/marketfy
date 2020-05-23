module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('providers', 'description', {
      type: Sequelize.STRING,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('providers', 'description');
  },
};
