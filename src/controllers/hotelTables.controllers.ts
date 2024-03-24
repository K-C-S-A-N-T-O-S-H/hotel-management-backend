import { NextFunction, Request, Response } from 'express';
import { CreateHotelTablesDto, UpdateHotelTablesDto } from '@/dtos/hotelTables.dto';
import { hotelTables } from '@interfaces/hotelTables.interface';
import hotelTablesService from '@/services/hotelTables.service';

class HotelTablesController {
    public hotelTablesService = new hotelTablesService();

    public getHotelTables = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllHotelTablesData: hotelTables[] = await this.hotelTablesService.findAllHotelTables();
            res.status(200).json({ message: 'findAll', data: findAllHotelTablesData });
        } catch (error) {
            next(error);
        }
    };

    public getHotelTablesById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotel_id: string = req.params.id;
            const findOneHotelData: hotelTables = await this.hotelTablesService.findHotelTablesById(hotel_id);

            res.status(200).json({ message: 'findOne', data: findOneHotelData });
        } catch (error) {
            next(error);
        }
    };

    public createHotelTables = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelData: CreateHotelTablesDto = req.body;
            const createHotelData: hotelTables = await this.hotelTablesService.createHotelTables(hotelData);

            res.status(201).json({ message: 'created', data: createHotelData });
        } catch (error) {
            next(error);
        }
    };
    public updateHotelTableById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelId: string = req.params.id;
            const hotelData: UpdateHotelTablesDto = req.body;
            const updateHotelData: hotelTables = await this.hotelTablesService.updateHotelTablesById(hotelId, hotelData);
            res.status(200).json({ message: 'Hotel updated successfully', data: updateHotelData });
        } catch (error) {
            next(error);
        }
    };
    public deleteTableHotel = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelId: string = req.params.id;
            await this.hotelTablesService.deleteHotelTables(hotelId);

            res.status(200).json({ message: ' Data deleted successfully' });
        } catch (error) {
            next(error);
        }
    };
}

export default HotelTablesController;
