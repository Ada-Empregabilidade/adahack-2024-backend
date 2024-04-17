const path = require('path');

require('dotenv').config({path: path.resolve(__dirname,'../../src/.env')});

module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME
};
