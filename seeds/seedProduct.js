const { Product } = require('../models');

const productData = [
  {
    product_name: 'Cook Book',
    price: 10.99,
    stock: 23,
    category_id: 1,
  },
  {
    product_name: 'Rice 2kg',
    price: 4.99,
    stock: 100,
    category_id: 5,
  },
  {
    product_name: 'Iron pan Large',
    price: 34.99,
    stock: 14,
    category_id: 4,
  },
  {
    product_name: 'Mixing Bowl Plastic',
    price: 22.99,
    stock: 32,
    category_id: 3,
  },
  {
    product_name: 'Scales',
    price: 29.99,
    stock: 19,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
