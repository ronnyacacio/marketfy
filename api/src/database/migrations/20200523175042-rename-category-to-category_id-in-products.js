module.exports = {
  up: (queryInterface) => {
    return queryInterface.renameColumn('products', 'category', 'category_id');
  },

  down: (queryInterface) => {
    return queryInterface.renameColumn('products', 'category_id', 'category');
  },
};
