const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(); //será necessario fazer a conexão com o banco

const Candidate = sequelize.define('Candidate',{
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

    objective : {
        type: DataTypes.STRING
    },

    summary : {
        type: DataTypes.STRING
    },

    date_of_birth : {
        type : DateTypes.DATE
    },

    gender : {
        type: DateType.STRING
    },

    sexual_orientation : {
        type: DateType.STRING
    },

    ethnicity : {
        type: DateType.STRING
    },

    pwd : {
        type: DateType.BOOLEAN
    },

    is_employee : {
        type : DateType.BOOLEAN
    }

},{tableName : 'candidates'});

module.exports = Candidate;