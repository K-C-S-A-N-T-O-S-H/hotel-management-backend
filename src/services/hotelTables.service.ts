import { HttpException } from '@exceptions/HttpException';
import hotelTablesModel from '@models/hotelTables.model';
import { isEmpty } from '@utils/util';
import { hotelTables } from '@/interfaces/hotelTables.interface';
import { CreateHotelTablesDto, UpdateHotelTablesDto } from '@/dtos/hotelTables.dto';

class hotelTablesService {
    public hotelTables = hotelTablesModel;
    public async findAllHotelTables(): Promise<hotelTables[]> {
        const users: hotelTables[] = await this.hotelTables.find();
        return users;
    }

    public async findHotelTablesById(hotelTables_id: string): Promise<hotelTables> {
        if (isEmpty(hotelTables_id)) throw new HttpException(400, 'hotelTables Id is empty');
        const findHotelTables: hotelTables = await this.hotelTables.findOne({ _id: hotelTables_id });
        if (!findHotelTables) throw new HttpException(409, "hotelTables doesn't exist");
        return findHotelTables;
    }

    public async createHotelTables(hotelTablesData: CreateHotelTablesDto): Promise<hotelTables> {
        if (isEmpty(hotelTablesData)) throw new HttpException(400, 'hotelTablesData is empty');

        const createHotelTablesData: hotelTables = await this.hotelTables.create(hotelTablesData);

        return createHotelTablesData;
    }

    public async updateHotelTablesById(hotelTablesId: string, hotelTablesData: UpdateHotelTablesDto): Promise<hotelTables> {
        if (!hotelTablesId) throw new HttpException(404, 'hotelTables ID is required');

        const findHotelTables: hotelTables = await this.hotelTables.findById(hotelTablesId);
        if (!findHotelTables) throw new HttpException(404, 'hotelTables not found');

        const updatedHotelTables: hotelTables = await this.hotelTables.findByIdAndUpdate(hotelTablesId, hotelTablesData, { new: true });

        if (!updatedHotelTables) throw new HttpException(500, 'Failed to update hotelTables details');

        return updatedHotelTables;
    }

    public async deleteHotelTables(hotelTablesId: string): Promise<hotelTables> {
        const deleteUserById: hotelTables = await this.hotelTables.findByIdAndDelete(hotelTablesId);
        if (!deleteUserById) throw new HttpException(409, "User doesn't exist");

        return deleteUserById;
    }
}

export default hotelTablesService;
