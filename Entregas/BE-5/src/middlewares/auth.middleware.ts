import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { CustomError } from '../utils/custom-error';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  try {

    if (!authorization) {
      throw new CustomError('Não autorizado', 401);
    }

    const token = authorization.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET!, (error) => {
      if (error) {
        throw new CustomError('Token de acesso inválido', 401);
      }
      next();
    });
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({ message: error.message });
    }
    res.status(500).json({ message: 'Erro interno do servidor' });
  }

};
