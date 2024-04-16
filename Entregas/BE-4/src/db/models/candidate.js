const {User} = require('../db.sync');

module.exports = (sequelize,DataTypes,User) => {
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
    
        date_of_birth : {
            type : DataTypes.DATE
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
    
        is_employee : {
            type : DataTypes.BOOLEAN
        }
    
    },{tableName : 'candidates',timestamps : false});
    
    return Candidate;
}