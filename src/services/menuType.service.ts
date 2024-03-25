import { HttpException } from '@exceptions/HttpException';
import MenuTypeModel from '@models/menuTypes.model';
import { isEmpty } from '@utils/util';
import { menuType } from '@/interfaces/menuTypes.interface';
import { CreateMenuTypeDto, UpdateMenuTypeDto } from '@/dtos/menuTypes.dto';

class menuTypeService {
    public MenuType = MenuTypeModel;
    public async findAllMenuType(): Promise<menuType[]> {
        const users: menuType[] = await this.MenuType.find();
        return users;
    }

    public async findMenuTypeById(menuType_id: string): Promise<menuType> {
        if (isEmpty(menuType_id)) throw new HttpException(400, 'MenuType Id is empty');
        const findMenuType: menuType = await this.MenuType.findOne({ _id: menuType_id });
        if (!findMenuType) throw new HttpException(409, "MenuType doesn't exist");
        return findMenuType;
    }

    public async createMenuType(menuTypeData: CreateMenuTypeDto): Promise<menuType> {
        if (isEmpty(menuTypeData)) throw new HttpException(400, 'MenuType data is empty');

        const createMenuTypeData: menuType = await this.MenuType.create(menuTypeData);

        return createMenuTypeData;
    }

    public async updateMenuTypeById(MenuTypeId: string, MenuTypeData: UpdateMenuTypeDto): Promise<menuType> {
        if (!MenuTypeId) throw new HttpException(404, 'MenuType ID is required');

        const findMenuType: menuType = await this.MenuType.findById(MenuTypeId);
        if (!findMenuType) throw new HttpException(404, 'MenuType not found');

        const updatedMenuType: menuType = await this.MenuType.findByIdAndUpdate(MenuTypeId, MenuTypeData, { new: true });

        if (!updatedMenuType) throw new HttpException(500, 'Failed to update MenuType details');

        return updatedMenuType;
    }

    public async deleteMenuType(MenuTypeId: string): Promise<menuType> {
        const deleteMenuTypeById: menuType = await this.MenuType.findByIdAndDelete(MenuTypeId);
        if (!deleteMenuTypeById) throw new HttpException(409, "menuType doesn't exist");

        return deleteMenuTypeById;
    }
}

export default menuTypeService;
