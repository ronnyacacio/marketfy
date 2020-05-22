module.exports = {
  up: (queryInterface) => {
    return queryInterface.renameColumn('users', 'image_id', 'avatar_id');
  },

  down: (queryInterface) => {
    return queryInterface.renameColumn('users', 'avatar_id', 'image_id');
  },
};
