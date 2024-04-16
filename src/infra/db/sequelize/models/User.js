import Sequelize from 'sequelize';
import {sequelize} from '../database.js';

export const User = sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        position: Sequelize.STRING,
        email: Sequelize.STRING,
        encrypted_password: Sequelize.STRING,
        salt: Sequelize.STRING,
        education_level: Sequelize.STRING,
        gender: Sequelize.BOOLEAN,
        nationality: Sequelize.STRING,
        color: Sequelize.BOOLEAN,
        sexual_orientation: Sequelize.BOOLEAN,
        pcd: Sequelize.BOOLEAN,
        over60: Sequelize.BOOLEAN,
        user_type: Sequelize.ENUM(['admin', 'manager', 'worker']),
    },
    {
        tableName: 'tb_users',
        timeStamps: false,
        underscored: true
    },
);

User.sync();
