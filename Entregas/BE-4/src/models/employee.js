const sequelize = require("../../config/db/db.connect");
const {DataTypes} = require("sequelize");

const Employee = sequelize.define('Employee',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        unique: true,
        autoIncrement : true,
        allowNull : false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  
    position : {
        type: DataTypes.STRING
    },

    department : {
        type: DataTypes.STRING
    },

    gender : {
        type: DataTypes.STRING
    },
  
    sexual_orientation : {
        type: DataTypes.STRING
    },
  
    ethnicity : {
        type: DataTypes.STRING
    },
  
    pwd : {
        type: DataTypes.BOOLEAN
    },

    employee_registration : {
        type : DataTypes.DATE
    }, 

},{tableName : 'employees',timestamps : false});

module.exports = Employee;
