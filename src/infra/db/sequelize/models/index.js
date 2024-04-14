const dbConfig = require("../db.config.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  }
);

const User = require('./user.model.js')(sequelize, DataTypes);

module.exports = {
  sequelize,
  User
};

