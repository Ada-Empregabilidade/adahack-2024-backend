import { Request, Response } from "express";
import { IAuthService } from "../contracts/IAuthService";

class AuthController {

    private authService: IAuthService;

    constructor(authService: IAuthService) {
        this.authService = authService;
    }

    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ message: 'Email and password are required.' });
            }

            const { token } = await this.authService.login(email, password);

            return res.json({ token: token });
        } catch (error) {
            let errorMessage = 'Internal server error';
            if (error instanceof Error) {
                if (error.message === 'User not found' || error.message === 'Invalid password') {
                    return res.status(401).json({ message: error.message });
                }
                errorMessage = error.message;
            }
            return res.status(500).json({ message: errorMessage });
        }
    }
}

export { AuthController }