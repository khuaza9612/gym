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
        type: DataTypes.STRING
      },
      profesor: {
        type: DataTypes.STRING,
        
      },
      name: {
        type: DataTypes.STRING,
        
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      
    }
  );
}