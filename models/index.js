const User = require('./User');
const Recipe = require('./Recipe');

// Products belongsTo Category
/* Recipe.belongsTo(User, {
    foreignKey: 'user_id',
  }); */
  
  // Categories have many Products
  /* User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  }); */

module.exports = { User , Recipe};
