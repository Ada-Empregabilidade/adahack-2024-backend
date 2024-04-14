const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        position: Sequelize.STRING,
        email: Sequelize.STRING,
        encryptedPassword: Sequelize.STRING,
        salt: Sequelize.STRING,
        educationLevel: Sequelize.STRING,
        gender: Sequelize.BOOLEAN,
        color: Sequelize.BOOLEAN,
        sexualOrientation: Sequelize.BOOLEAN,
        pcd: Sequelize.BOOLEAN,
        over60: Sequelize.BOOLEAN,
        userType: Sequelize.ENUM(['admin', 'manager', 'worker']),
    },
    {
        tableName: 'tb_users',
        timeStamps: true,
    },
);

User.sync();

module.exports = User;
