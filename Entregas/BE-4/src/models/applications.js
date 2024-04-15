const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(); //será necessario fazer a conexão com o banco

const Application = sequelize.define('Application',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        unique: true,
        autoIncrement : true,
        allowNull : false
    },

    candidateId : {
        type : DataTypes.INTEGER,
        references : {
            model : Candidate,
            key: 'id'
            }
    },

    jobId : {
        type : DataTypes.INTEGER,
        references : {
            model : jobId,
            key: 'id'
            }
    },

    
},{tableName : 'applications_job_candidate'});

module.exports = Application;