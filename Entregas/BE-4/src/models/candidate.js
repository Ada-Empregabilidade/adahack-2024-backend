const sequelize = require("../../config/db/db.connect");
const {DataTypes} = require("sequelize");

const Candidate = sequelize.define('Candidate',{
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

    objective : {
        type: DataTypes.STRING
    },

    summary : {
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
    }  

},{tableName : 'candidates',timestamps : false});

module.exports = Candidate;