const seedCategories = require('./seedCategory');
const seedProducts = require('./seedProduct');
const seedTags = require('./seedID');
const seedProductTags = require('./seedProductID');
const sequelize = require('../config/connection');
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----------\n');
  await seedCategories();
  console.log('\n----------\n');

  await seedProducts();
  console.log('\n----------\n');

  await seedTags();
  console.log('\n----------\n');

  await seedProductTags();
  console.log('\n----------\n');

  process.exit(0);
};
seedAll();
