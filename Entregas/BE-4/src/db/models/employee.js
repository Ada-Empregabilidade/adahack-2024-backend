module.exports = (sequelize,DataTypes,User) => {
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
    
    return Employee;
}