import { HttpException } from '@exceptions/HttpException';
import itemModel from '@models/items.model';
import { isEmpty } from '@utils/util';
import { items } from '@/interfaces/items.interface';
import { CreateItemDto, UpdateItemDto } from '@/dtos/item.dto';

class itemService {
    public item = itemModel;
    public async findAllItem(): Promise<items[]> {
        const users: items[] = await this.item.find();
        return users;
    }

    public async findItemById(item_id: string): Promise<items> {
        if (isEmpty(item_id)) throw new HttpException(400, 'item Id is empty');
        const findItem: items = await this.item.findOne({ _id: item_id });
        if (!findItem) throw new HttpException(409, "item doesn't exist");
        return findItem;
    }

    public async createItem(itemData: CreateItemDto): Promise<items> {
        if (isEmpty(itemData)) throw new HttpException(400, 'item data is empty');

        const createItemData: items = await this.item.create(itemData);

        return createItemData;
    }

    public async updateItemById(itemId: string, itemData: UpdateItemDto): Promise<items> {
        if (!itemId) throw new HttpException(404, 'item ID is required');

        const findItem: items = await this.item.findById(itemId);
        if (!findItem) throw new HttpException(404, 'item not found');

        const updatedItem: items = await this.item.findByIdAndUpdate(itemId, itemData, { new: true });

        if (!updatedItem) throw new HttpException(500, 'Failed to update item details');

        return updatedItem;
    }

    public async deleteItem(itemId: string): Promise<items> {
        const deleteItemById: items = await this.item.findByIdAndDelete(itemId);
        if (!deleteItemById) throw new HttpException(409, "item doesn't exist");

        return deleteItemById;
    }
}

export default itemService;
