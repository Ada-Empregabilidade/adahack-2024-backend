const {User} = require('../db.sync');

module.exports = (sequelize,DataTypes,User) => {

    const HumanResource = sequelize.define('HumanResource',{
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
    
        employee_registration : {
            type: DataTypes.INTEGER
        }
    },{tableName: 'human_resources',timestamps : false});

    return HumanResource;
}

