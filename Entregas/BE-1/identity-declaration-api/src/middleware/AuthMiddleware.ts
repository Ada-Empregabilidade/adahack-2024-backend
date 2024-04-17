import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authorizationHeader = req.header('Authorization');

  if (!authorizationHeader) {
    return res.status(401).send({ error: 'Authorization header is missing.' });
  }

  if (!authorizationHeader.toLowerCase().startsWith('bearer ')) {
    return res.status(401).send({ error: 'Expected a Bearer token.' });
  }

  const accessToken = authorizationHeader.split(' ')[1];
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).send({ error: 'JWT secret is not configured.' });
  }

  try {
    verify(accessToken, secret);
    next();
  } catch (error) {
    return res.status(401).send({ error: 'Invalid token.' });
  }
}

export { authMiddleware }