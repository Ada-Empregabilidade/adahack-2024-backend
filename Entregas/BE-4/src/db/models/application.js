const {Candidate,Job} = require('../db.sync');

module.exports = (sequelize,DataTypes,Job,Candidate) => {
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

    return Application
}
