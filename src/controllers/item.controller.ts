import { NextFunction, Request, Response } from 'express';
import { CreateItemDto, UpdateItemDto } from '@/dtos/item.dto';
import { items } from '@interfaces/items.interface';
import itemService from '@/services/item.services';

class ItemController {
    public itemService = new itemService();

    public findAllItem = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllItemData: items[] = await this.itemService.findAllItem();
            res.status(200).json({ message: 'findAll', data: findAllItemData });
        } catch (error) {
            next(error);
        }
    };

    public findItemById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotel_id: string = req.params.id;
            const findItemByIdData: items = await this.itemService.findItemById(hotel_id);

            res.status(200).json({ message: 'findOne', data: findItemByIdData });
        } catch (error) {
            next(error);
        }
    };

    public createItem = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelData: CreateItemDto = req.body;
            const createItemData: items = await this.itemService.createItem(hotelData);

            res.status(201).json({ message: 'created', data: createItemData });
        } catch (error) {
            next(error);
        }
    };
    public updateItemById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelId: string = req.params.id;
            const hotelData: UpdateItemDto = req.body;
            const updateItemByIdData: items = await this.itemService.updateItemById(hotelId, hotelData);
            res.status(200).json({ message: 'item updated successfully', data: updateItemByIdData });
        } catch (error) {
            next(error);
        }
    };
    public deleteItem = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelId: string = req.params.id;
            await this.itemService.deleteItem(hotelId);

            res.status(200).json({ message: ' Data deleted successfully' });
        } catch (error) {
            next(error);
        }
    };
}

export default ItemController;
