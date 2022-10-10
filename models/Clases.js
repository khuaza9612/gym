const { DataTypes } = require('sequelize');
const sequelize = require('../db');
//const bcrypt = require('bcrypt');

module.exports = (sequelize) => {  sequelize.define(
    'clase',
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.DATE
      },
      profesor: {
        type: DataTypes.STRING,
        defaultValue: 'en espera'
      },
      name: {
        type: DataTypes.STRING,
        
      }
    },
    {
      timestamps: false,
    }
  );
}