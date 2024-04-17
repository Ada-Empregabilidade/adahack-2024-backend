import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export function logRequestResponse(req: Request, res: Response, next: NextFunction) {
  const start = process.hrtime();

  res.on('finish', () => {
    const durationInMilliseconds = getDurationInMilliseconds(start);
    logger.info(`${req.method} ${req.originalUrl} - ${res.statusCode} - ${durationInMilliseconds.toLocaleString()}ms`);
  });

  next();
}

function getDurationInMilliseconds(start: [number, number]): number {
  const NS_PER_SEC = 1e9;
  const NS_TO_MS = 1e6;
  const diff = process.hrtime(start);
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
}
