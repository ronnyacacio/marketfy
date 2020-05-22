module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'description', {
      type: Sequelize.STRING,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'description');
  },
};
