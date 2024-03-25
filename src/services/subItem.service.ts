import { HttpException } from '@exceptions/HttpException';
import subSubItemModel from '@models/subItems.model';
import { isEmpty } from '@utils/util';
import { subItems } from '@/interfaces/subItems.interface';
import { CreateSubItemsDto, UpdateSubItemsDto } from '@/dtos/subItem.dto';

class subSubItemService {
    public subSubItem = subSubItemModel;
    public async findAllSubItem(): Promise<subItems[]> {
        const users: subItems[] = await this.subSubItem.find();
        return users;
    }

    public async findSubItemById(subSubItem_id: string): Promise<subItems> {
        if (isEmpty(subSubItem_id)) throw new HttpException(400, 'subSubItem Id is empty');
        const findSubItem: subItems = await this.subSubItem.findOne({ _id: subSubItem_id });
        if (!findSubItem) throw new HttpException(409, "subSubItem doesn't exist");
        return findSubItem;
    }

    public async createSubItem(subSubItemData: CreateSubItemsDto): Promise<subItems> {
        if (isEmpty(subSubItemData)) throw new HttpException(400, 'subSubItem data is empty');

        const createSubItemData: subItems = await this.subSubItem.create(subSubItemData);

        return createSubItemData;
    }

    public async updateSubItemById(subSubItemId: string, subSubItemData: UpdateSubItemsDto): Promise<subItems> {
        if (!subSubItemId) throw new HttpException(404, 'subSubItem ID is required');

        const findSubItem: subItems = await this.subSubItem.findById(subSubItemId);
        if (!findSubItem) throw new HttpException(404, 'subSubItem not found');

        const updatedSubItem: subItems = await this.subSubItem.findByIdAndUpdate(subSubItemId, subSubItemData, { new: true });

        if (!updatedSubItem) throw new HttpException(500, 'Failed to update subSubItem details');

        return updatedSubItem;
    }

    public async deleteSubItem(subSubItemId: string): Promise<subItems> {
        const deleteSubItemById: subItems = await this.subSubItem.findByIdAndDelete(subSubItemId);
        if (!deleteSubItemById) throw new HttpException(409, "subSubItem doesn't exist");

        return deleteSubItemById;
    }
}

export default subSubItemService;
