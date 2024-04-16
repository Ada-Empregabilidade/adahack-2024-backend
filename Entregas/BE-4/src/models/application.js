const sequelize = require("../../config/db/db.connect");
const {DataTypes} = require("sequelize");
const Job = require("./job");
const Candidate = require("./candidate");

    const Application = sequelize.define('Application',{
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            unique: true,
            autoIncrement : true,
            allowNull : false
        },
    
        candidate_id : {
            type : DataTypes.INTEGER,
            references : {
                model : Candidate,
                key: 'id'
                }
        },
    
        job_id : {
            type : DataTypes.INTEGER,
            references : {
                model : Job,
                key: 'id'
                }
        },
        
    },{tableName : 'applications',timestamps : false});

module.exports = Application;

