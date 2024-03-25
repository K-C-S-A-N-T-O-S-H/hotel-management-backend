import { NextFunction, Request, Response } from 'express';
import { CreateSubItemsDto, UpdateSubItemsDto } from '@/dtos/subItem.dto';
import { subItems } from '@interfaces/subItems.interface';
import subItemService from '@/services/subItem.service';

class SubItemController {
    public subItemService = new subItemService();

    public findAllSubItems = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllSubItemsData: subItems[] = await this.subItemService.findAllSubItem();
            res.status(200).json({ message: 'findAll', data: findAllSubItemsData });
        } catch (error) {
            next(error);
        }
    };

    public findSubItemById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotel_id: string = req.params.id;
            const findSubItemsData: subItems = await this.subItemService.findSubItemById(hotel_id);

            res.status(200).json({ message: 'findOne', data: findSubItemsData });
        } catch (error) {
            next(error);
        }
    };

    public createSubItems = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelData: CreateSubItemsDto = req.body;
            const createSubItemsData: subItems = await this.subItemService.createSubItem(hotelData);

            res.status(201).json({ message: 'created', data: createSubItemsData });
        } catch (error) {
            next(error);
        }
    };
    public updateSubItems = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelId: string = req.params.id;
            const hotelData: UpdateSubItemsDto = req.body;
            const updateSubItemsData: subItems = await this.subItemService.updateSubItemById(hotelId, hotelData);
            res.status(200).json({ message: 'MenuType updated successfully', data: updateSubItemsData });
        } catch (error) {
            next(error);
        }
    };
    public deleteSubItems = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelId: string = req.params.id;
            await this.subItemService.deleteSubItem(hotelId);

            res.status(200).json({ message: ' Data deleted successfully' });
        } catch (error) {
            next(error);
        }
    };
}

export default SubItemController;
