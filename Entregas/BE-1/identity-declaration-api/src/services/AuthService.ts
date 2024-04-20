import { sign } from 'jsonwebtoken';
import { IUserRepository } from '../contracts/IUserRepository';
import { User } from '@prisma/client';

class AuthService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  private generateToken(user: User) {
    const secret = process.env.JWT_SECRET!;
    const payload = {
      email: user.email,
    };
    return sign(payload, secret, { expiresIn: '1h' });
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    const valid = await this.userRepository.comparePassword(user.password, password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    const token = this.generateToken(user);
    return { token };
  }
}

export { AuthService };