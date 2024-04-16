const {Human_Resource} = require('../db.sync');

module.exports = (sequelize,DataTypes,HumanResource) => {
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
                model : HumanResource,
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
            type : DataTypes.BOOLEAN,
            allowNull : false
        }
    },
    {tableName: 'jobs',timestamps : false});

    return Job;
}

