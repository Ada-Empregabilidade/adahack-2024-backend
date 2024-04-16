const sequelize = require("../../config/db/db.connect");
const {DataTypes} = require("sequelize");
const User = require("./user");

const Employee = sequelize.define('Employee',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        unique: true,
        autoIncrement : true,
        allowNull : false
    },

    user_id : {
        type : DataTypes.INTEGER,
        references : {
            model : User,
            key: 'id'
        }
    },

    position : {
        type: DataTypes.STRING
    },

    department : {
        type: DataTypes.STRING
    },

    employee_registration : {
        type : DataTypes.DATE
    }, 

},{tableName : 'employees',timestamps : false});

module.exports = Employee;
