const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(); //será necessario fazer a conexão com o banco

const Human_Resource = sequelize.define('Human_Resource',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        unique: true,
        autoIncrement : true,
        allowNull : false
    },

    userId : {
        type : DataTypes.INTEGER,
        references : {
            model : User,
            key: 'id'
            }
    },

    employee_registration : {
        type: DataTypes.INTEGER
    }
});

module.exports = Human_Resource;
