import * as dotenv from 'dotenv';
import { DataTypes, Sequelize } from 'sequelize';

dotenv.config();
const dbConfig = {
    DB: process.env.DATABASE,
    USER: process.env.DB_USER,
    PASSWORD: process.env.PASSWORD,
    HOST: process.env.HOST,
    dialect: process.env.dialect,
};
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
});

sequelize
    .sync()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err =>
        console.error('Unable to connect to the database:', err.message),
    );

import UserModel from './user.model.js';
const User = UserModel(sequelize, DataTypes);

async function registerAdmin() {
    let adminExists = await User.findOne({ where: { user_type: 'admin' } });
    if (!adminExists) {
        try {
            adminExists = await User.create({
                first_name: 'admin',
                email: 'admin@corp-solutions.com',
                user_type: 'admin',
            });
        } catch (error) {
            console.error('Error while registering System Admin:', error);
        }
    }
    console.log('\n\n\nAdmin e-mail:', adminExists.dataValues.email);
}
registerAdmin();
export { sequelize, User };
