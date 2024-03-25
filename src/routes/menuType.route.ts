import { Router } from 'express';
import { CreateMenuTypeDto, UpdateMenuTypeDto } from '@/dtos/menuTypes.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import MenuTypeController from '@/controllers/menuTypes.controller';

class MenuTypeControllerRoute implements Routes {
    public path = '/menuType';
    public router = Router();
    public MenuTypeController = new MenuTypeController();
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        try {
            this.router.get(`${this.path}`, this.MenuTypeController.findAllMenuType);
            this.router.get(`${this.path}/:id`, this.MenuTypeController.findMenuTypeById);
            this.router.post(`${this.path}`, validationMiddleware(CreateMenuTypeDto, 'body'), this.MenuTypeController.createMenuType);
            this.router.put(`${this.path}/:id`, validationMiddleware(UpdateMenuTypeDto, 'body', true), this.MenuTypeController.updateMenuTypeById);
            this.router.delete(`${this.path}/:id`, this.MenuTypeController.deleteMenuType);
        } catch (error) {
            console.log('KC error', error);
        }
    }
}

export default MenuTypeControllerRoute;
