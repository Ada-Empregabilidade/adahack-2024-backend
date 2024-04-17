import { CustomError } from '../utils/custom-error';
import { prisma } from '../client';

export const registerRepository = async (email: any, hashedPassword: any) => {
  if (!(email || !hashedPassword)) {
    throw new CustomError('O email ou senha não foram fornecidos', 400);
  };

  const user = await prisma.users.findUnique({
    where: { email },
  });

  if (user) {
    throw new CustomError('Ja existe um usuario com este email', 409);
  }

  await prisma.users.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });
};

export const loginRepository = async (email: any) => {
  const user = await prisma.users.findUnique({
    where: { email },
  });

  return user;
};
