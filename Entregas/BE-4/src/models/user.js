const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(); //será necessario fazer a conexão com o banco

const User = sequelize.define('User', {
    id : {
        type : DataTypes.INTEGER,
        unique :true,
        primaryKey : true,
        autoIncrement : true,
        allowNull: false,
    },

    name : {
        type : DataTypes.STRING,
        allowNull : false
    },

    email : {
        type : DataTypes.STRING,
        allowNull: false
    },

    phone : {
        type : DataTypes.STRING,
        allowNull: false
    },

    password : {
        type : DataTypes.STRING,
        allowNull : false   
    },


    user_type : {
        type : DataTypes.STRING,
        allowNull : false
    },

}, {tableName: 'Users'});

module.exports = User;