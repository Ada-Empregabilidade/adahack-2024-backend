import dbConfig from '../db.config.js';
import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: false,
});

sequelize
    .sync()
    .then(/*console.log('Connection has been established successfully.')*/)
    .catch(err =>
        console.error('Unable to connect to the database:', err.message),
    );

import UserModel from './user.model.js';
const User = UserModel(sequelize, DataTypes);

export { sequelize, User };
