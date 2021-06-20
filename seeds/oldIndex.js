
const seedMeals = require('./mealsData');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedMeals();
  console.log('\n----- MEALS SEEDED -----\n');

  process.exit(0);
};

seedAll();
