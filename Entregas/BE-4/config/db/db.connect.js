const Sequelize = require("sequelize");
const dbConfig = require("./db.config");
const mysql = require("mysql2/promise");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: "mysql",
  });

mysql.createConnection({
    user: dbConfig.USER,
    password: dbConfig.PASSWORD
}).then((connection)=>{
    connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.DB}\`;`).then(()=>{
        console.log("")
    })
}).finally(()=>{
    sequelize.authenticate()
        .then(()=>{
            console.log('Conexão com banco estabelecida');
        })
        .catch((err) => {console.log('Erro ao conectar com o banco:',err)});
})

module.exports = sequelize;

