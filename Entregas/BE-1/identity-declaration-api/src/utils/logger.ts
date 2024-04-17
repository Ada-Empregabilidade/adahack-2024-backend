import winston from 'winston';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: () => format(new Date(), 'dd/MM/yyyy HH:mm:ss', { locale: ptBR })
    }),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.Console()]
});

export default logger;
