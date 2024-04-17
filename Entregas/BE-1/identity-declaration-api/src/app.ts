import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import logger from './utils/logger';
import routes from './routes';

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({ path: envFile });

const app = express();

app.use(morgan("dev", { stream: { write: message => logger.info(message.trim()) } }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Server started on port ${port}. Ready to handle requests.`);
});

export default app;
