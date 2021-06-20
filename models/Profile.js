// create model for user profile details

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model { User }

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: 
    {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: 
    {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weightGoal: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activityLevel: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dietaryPreference: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allergies: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    excludeFoods: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calorieLimit: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measurementSystem: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carbs: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fat: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    protein: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Profile',
  }
);

module.exports = Profile;
