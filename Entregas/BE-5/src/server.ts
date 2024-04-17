import 'dotenv/config';
import express, { Application } from 'express';
import router from './routes';
import cors from 'cors';

const server: Application = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(router);

export default server;
