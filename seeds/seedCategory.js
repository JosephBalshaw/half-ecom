const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Books',
  },
  {
    category_name: 'Appliance',
  },
  {
    category_name: 'Misc',
  },
  {
    category_name: 'Cook Ware',
  },
  {
    category_name: 'Food',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
