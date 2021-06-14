const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipie extends Model { }

Recipie.init(
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
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        servings:{
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        sourceUrl:{
            type: DataTypes.NUMBER,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'painting',
      }
);

module.exports = Recipie;