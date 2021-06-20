const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model { }

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageType:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        readyInMinutes:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        servings:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sourceUrl:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        /* user_id: {
            type: DataTypes.INTEGER,
            references: {  //References the User model's id.
              model: 'User',
              key: 'id',
            },
          } */
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe',
      }
);

module.exports = Recipe;