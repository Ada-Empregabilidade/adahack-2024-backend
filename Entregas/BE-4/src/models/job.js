const {Sequelize, DataTypes} = require('sequelize');
const Human_Resource = require('./human_resorce');

const sequelize = new Sequelize(); //será necessario fazer a conexão com o banco

const Job = sequelize.define('Job',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        unique: true,
        autoIncrement : true,
        allowNull : false
    },

    hrId : {
        type : DataTypes.INTEGER,
        references : {
            model : Human_Resource,
            key: 'id'
            }
    },

    objective : {
        type: DataTypes.STRING,
        allowNull : false
    },

    description : {
        type: DataTypes.STRING,
        allowNull : false
    },

    status : {
        type: DataTypes.STRING,
        allowNull : false
    },

    affirmative : {
        type : DataType.BOOLEAN,
        allowNull : false
    }


});

module.exports = Human_Resource;
