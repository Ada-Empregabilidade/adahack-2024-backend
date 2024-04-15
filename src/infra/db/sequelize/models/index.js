import dbConfig from "../db.config.js";
import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  }
);

import UserModel from './user.model.js'
const User = UserModel(sequelize, DataTypes);

export default {
  sequelize,
  User
};