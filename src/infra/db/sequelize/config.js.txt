import * as dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  test: {
    "username": "postgres",
    "password": "admin",
    "database": "postgres",
    "host": "localhost",
    "dialect": "postgres"
  },
  production: {
    "username": "postgres",
    "password": "password",
    "database": "postgres",
    "host": "localhost",
    "dialect": "postgres"
  }
}