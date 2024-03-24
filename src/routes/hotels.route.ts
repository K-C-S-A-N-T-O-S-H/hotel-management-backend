import { Router } from 'express';
import HotelsController from '@/controllers/hotels.controllers';
import { CreateHotelDto, UpdateHotelDto } from '@/dtos/hotels.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class HotelsRoute implements Routes {
    public path = '/hotels';
    public router = Router();
    public hotelsController = new HotelsController();
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        try {
            this.router.get(`${this.path}`, this.hotelsController.getHotels);
            this.router.get(`${this.path}/:id`, this.hotelsController.getHotelById);
            this.router.post(`${this.path}`, validationMiddleware(CreateHotelDto, 'body'), this.hotelsController.createHotel);
            this.router.put(`${this.path}/:id`, validationMiddleware(UpdateHotelDto, 'body', true), this.hotelsController.updateHotelById);
            this.router.delete(`${this.path}/:id`, this.hotelsController.deleteHotel);
        } catch (error) {
            console.log('KC error', error);
        }
    }
}

export default HotelsRoute;
