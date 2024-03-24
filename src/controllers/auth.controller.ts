import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@/dtos/users.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import { user } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';

class AuthController {
    public authService = new AuthService();

    public signUp = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData: CreateUserDto = req.body;
            const signUpUserData: user = await this.authService.signup(userData);

            res.status(201).json({ message: 'signup', data: signUpUserData });
        } catch (error) {
            next(error);
        }
    };

    public logIn = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData: CreateUserDto = req.body;
            const { cookie, findUser } = await this.authService.login(userData);

            res.setHeader('Set-Cookie', [cookie]);
            res.status(200).json({ message: 'login', data: findUser });
        } catch (error) {
            next(error);
        }
    };

    public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const userData: user = req.user;
            const logOutUserData: user = await this.authService.logout(userData);

            res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
            res.status(200).json({ message: 'logout', data: logOutUserData });
        } catch (error) {
            next(error);
        }
    };
}

export default AuthController;
