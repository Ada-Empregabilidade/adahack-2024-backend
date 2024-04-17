import { Request, Response } from 'express';
import { loginService, registerService } from '../services/user.services';
import { CustomError } from '../utils/custom-error';
import { isEmailValid } from '../utils/is-email';

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new CustomError('Email ou password não foram fornecidos', 400);
    };

    if (typeof email != 'string' || typeof password != 'string') {
      throw new CustomError('Email e password precisam ser do tipo string', 400);
    }

    if (!isEmailValid(email)) {
      throw new CustomError('Email inválido', 400);
    }

    await registerService(email, password);
    return res.status(201).json({ message: 'Usuario cadastrado com sucesso' });
  } catch (error) {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

export const verifyLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;


  try {
    if (!email || !password) {
      throw new CustomError('Email ou password não foram fornecidos', 400);
    };

    if (typeof email != 'string' || typeof password != 'string') {
      throw new CustomError('Email e password precisam ser do tipo string', 400);
    }

    if (!isEmailValid(email)) {
      throw new CustomError('Email inválido', 400);
    }

    const login = await loginService(email, password);
    return res.status(200).json(login);
  } catch (error: any) {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};
