import { sign } from 'jsonwebtoken';
import { userRepository } from '../repositories/UserRepository';
import { User } from '../models/User';

class AuthService {
  private generateToken(user: User) {
    const secret = process.env.JWT_SECRET!
    const payload = {
      email: user.email,
    };
    return sign(payload, secret, { expiresIn: '1h' });
  }

  async login(email: string, password: string) {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    const valid = await userRepository.comparePassword(user.password, password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    const token = this.generateToken(user);
    return { token };
  }
}

const authService = new AuthService();

export { authService }
