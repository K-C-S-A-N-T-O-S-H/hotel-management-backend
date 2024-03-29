import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@/dtos/users.dto';
import { user } from '@interfaces/users.interface';
import userService from '@services/users.service';

class UsersController {
    public userService = new userService();
    public getUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllUsersData: user[] = await this.userService.findAllUser();
            res.status(200).json({ data: findAllUsersData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getUserById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId: string = req.params.id;
            const findOneUserData: user = await this.userService.findUserById(userId);

            res.status(200).json({ data: findOneUserData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData: CreateUserDto = req.body;
            const createUserData: user = await this.userService.createUser(userData);

            res.status(201).json({ data: createUserData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };

    public updateUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId: string = req.params.id;
            const userData: CreateUserDto = req.body;
            const updateUserData: user = await this.userService.updateUser(userId, userData);

            res.status(200).json({ data: updateUserData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId: string = req.params.id;
            const deleteUserData: user = await this.userService.deleteUser(userId);

            res.status(200).json({ data: deleteUserData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };
}

export default UsersController;
