import { Router } from 'express';
import HotelsTablesController from '@/controllers/hotelTables.controllers';
import { CreateHotelTablesDto, UpdateHotelTablesDto } from '@/dtos/hotelTables.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class HotelTablesRoute implements Routes {
    public path = '/hotelTables';
    public router = Router();
    public hotelsTableController = new HotelsTablesController();
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        try {
            this.router.get(`${this.path}`, this.hotelsTableController.getHotelTables);
            this.router.get(`${this.path}/:id`, this.hotelsTableController.getHotelTablesById);
            this.router.post(`${this.path}`, validationMiddleware(CreateHotelTablesDto, 'body'), this.hotelsTableController.createHotelTables);
            this.router.put(
                `${this.path}/:id`,
                validationMiddleware(UpdateHotelTablesDto, 'body', true),
                this.hotelsTableController.updateHotelTableById,
            );
            this.router.delete(`${this.path}/:id`, this.hotelsTableController.deleteTableHotel);
        } catch (error) {
            console.log('KC error', error);
        }
    }
}

export default HotelTablesRoute;
