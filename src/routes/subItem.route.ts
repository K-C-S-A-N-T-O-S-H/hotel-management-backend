import { Router } from 'express';
import { CreateSubItemsDto, UpdateSubItemsDto } from '@/dtos/subItem.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import SubItemController from '@/controllers/subItems.controller';

class SubItemRoute implements Routes {
    public path = '/SubItem';
    public router = Router();
    public SubItemController = new SubItemController();
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        try {
            this.router.get(`${this.path}`, this.SubItemController.findAllSubItems);
            this.router.get(`${this.path}/:id`, this.SubItemController.findSubItemById);
            this.router.post(`${this.path}`, validationMiddleware(CreateSubItemsDto, 'body'), this.SubItemController.createSubItems);
            this.router.put(`${this.path}/:id`, validationMiddleware(UpdateSubItemsDto, 'body', true), this.SubItemController.updateSubItems);
            this.router.delete(`${this.path}/:id`, this.SubItemController.deleteSubItems);
        } catch (error) {
            console.log('KC error', error);
        }
    }
}

export default SubItemRoute;
