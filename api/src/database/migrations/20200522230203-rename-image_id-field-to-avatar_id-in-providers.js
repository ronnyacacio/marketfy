module.exports = {
  up: (queryInterface) => {
    return queryInterface.renameColumn('providers', 'image_id', 'avatar_id');
  },

  down: (queryInterface) => {
    return queryInterface.renameColumn('providers', 'avatar_id', 'image_id');
  },
};
