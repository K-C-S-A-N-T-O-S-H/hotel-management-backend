import { NextFunction, Request, Response } from 'express';
import { CreateHotelDto, UpdateHotelDto } from '@/dtos/hotels.dto';
import { hotel } from '@interfaces/hotels.interface';
import hotelService from '@services/hotels.service';

class HotelsController {
    public hotelService = new hotelService();

    public getHotels = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllHotelsData: hotel[] = await this.hotelService.findAllHotel();
            res.status(200).json({ message: 'findAll', data: findAllHotelsData });
        } catch (error) {
            next(error);
        }
    };

    public getHotelById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotel_id: string = req.params.id;
            const findOneHotelData: hotel = await this.hotelService.findHotelById(hotel_id);

            res.status(200).json({ message: 'findOne', data: findOneHotelData });
        } catch (error) {
            next(error);
        }
    };

    public createHotel = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelData: CreateHotelDto = req.body;
            const createHotelData: hotel = await this.hotelService.createHotel(hotelData);

            res.status(201).json({ message: 'created', data: createHotelData });
        } catch (error) {
            next(error);
        }
    };
    public updateHotelById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelId: string = req.params.id;
            const hotelData: UpdateHotelDto = req.body;
            const updateHotelData: hotel = await this.hotelService.updateHotelById(hotelId, hotelData);
            res.status(200).json({ message: 'Hotel updated successfully', data: updateHotelData });
        } catch (error) {
            next(error);
        }
    };
    public deleteHotel = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelId: string = req.params.id;
            await this.hotelService.deleteHotel(hotelId);

            res.status(200).json({ message: ' Data deleted successfully' });
        } catch (error) {
            next(error);
        }
    };
}

export default HotelsController;
