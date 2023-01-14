const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('reserva',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        fecha: {
            type: DataTypes.STRING,
                 
        },
        idclase: {
            type: DataTypes.TEXT,
            allowNull: true      
        },
        titleProduct: {
            type: DataTypes.TEXT,
            allowNull: false      
        },
        image: {
            type: DataTypes.STRING,
          },
          profesor: {
            type: DataTypes.STRING,
            
          },
        //   email: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         isEmail: {
        //             msg: 'El email no es válido',
        //             args: true
        //         }
        //     }
        // },
    },
   );
};



// payment_id:{
//     type: DataTypes.INTEGER,
//     defaultValue: 0
// },
// payment_status:{
//     type: DataTypes.STRING,
//     defaultValue: ""
// },
// merchant_order_id: {
//     type: DataTypes.BIGINT,
//     defaultValue: 0
// }