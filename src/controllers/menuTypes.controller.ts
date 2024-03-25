import { NextFunction, Request, Response } from 'express';
import { CreateMenuTypeDto, UpdateMenuTypeDto } from '@/dtos/menuTypes.dto';
import { menuType } from '@interfaces/menuTypes.interface';
import menuTypeService from '@/services/menuType.service';

class MenuTypeController {
    public menuTypeService = new menuTypeService();

    public findAllMenuType = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllMenuTypeData: menuType[] = await this.menuTypeService.findAllMenuType();
            res.status(200).json({ message: 'findAll', data: findAllMenuTypeData });
        } catch (error) {
            next(error);
        }
    };

    public findMenuTypeById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotel_id: string = req.params.id;
            const findMenuTypeByIdData: menuType = await this.menuTypeService.findMenuTypeById(hotel_id);

            res.status(200).json({ message: 'findOne', data: findMenuTypeByIdData });
        } catch (error) {
            next(error);
        }
    };

    public createMenuType = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelData: CreateMenuTypeDto = req.body;
            const createMenuTypeData: menuType = await this.menuTypeService.createMenuType(hotelData);

            res.status(201).json({ message: 'created', data: createMenuTypeData });
        } catch (error) {
            next(error);
        }
    };
    public updateMenuTypeById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelId: string = req.params.id;
            const hotelData: UpdateMenuTypeDto = req.body;
            const updateMenuTypeByIdData: menuType = await this.menuTypeService.updateMenuTypeById(hotelId, hotelData);
            res.status(200).json({ message: 'MenuType updated successfully', data: updateMenuTypeByIdData });
        } catch (error) {
            next(error);
        }
    };
    public deleteMenuType = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelId: string = req.params.id;
            await this.menuTypeService.deleteMenuType(hotelId);

            res.status(200).json({ message: ' Data deleted successfully' });
        } catch (error) {
            next(error);
        }
    };
}

export default MenuTypeController;
