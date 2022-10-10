const { DataTypes } = require('sequelize');
const sequelize = require('../db');
//const bcrypt = require('bcrypt');

module.exports = (sequelize) => {  sequelize.define(
    'pago',
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      
     valor: {
        type: DataTypes.STRING,
        
      }
    },
    {
      timestamps: true,
    }
  );
}