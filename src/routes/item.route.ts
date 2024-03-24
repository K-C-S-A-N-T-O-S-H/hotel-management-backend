import { Router } from 'express';
import { CreateItemDto, UpdateItemDto } from '@/dtos/item.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import ItemController from '@/controllers/item.controller';

class ItemControllerRoute implements Routes {
    public path = '/item';
    public router = Router();
    public ItemController = new ItemController();
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        try {
            this.router.get(`${this.path}`, this.ItemController.findAllItem);
            this.router.get(`${this.path}/:id`, this.ItemController.findItemById);
            this.router.post(`${this.path}`, validationMiddleware(CreateItemDto, 'body'), this.ItemController.createItem);
            this.router.put(`${this.path}/:id`, validationMiddleware(UpdateItemDto, 'body', true), this.ItemController.updateItemById);
            this.router.delete(`${this.path}/:id`, this.ItemController.deleteItem);
        } catch (error) {
            console.log('KC error', error);
        }
    }
}

export default ItemControllerRoute;
