const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for user
class User extends Model {}

User.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    id:
    {
    type: DataTypes.INTEGER,
    allowNull: false, 
    primaryKey: true,
    autoIncrement: true
    },
    fName: 
    {
      type: DataTypes.STRING
    },
    lName: 
    {
      type: DataTypes.STRING 
    },
    userName: 
    {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: 
        {
          isEmail:true
        }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: 
        {
          len:[8]
        }
    }
    //hooks go here
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'user',
    freezeTableName: true
  }
);

module.exports = User;


