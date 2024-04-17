const sequelize = require("../../config/db/db.connect");
const {DataTypes} = require("sequelize");
const User = require("./user");

const Candidate = sequelize.define('Candidate',{
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

    objective : {
        type: DataTypes.STRING
    },

    summary : {
        type: DataTypes.STRING
    },

},{tableName : 'candidates',timestamps : false});

module.exports = Candidate;