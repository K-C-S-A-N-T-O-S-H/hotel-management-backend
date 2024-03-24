import { HttpException } from '@exceptions/HttpException';
import hotelModel from '@models/hotels.model';
import { isEmpty } from '@utils/util';
import { hotel } from '@/interfaces/hotels.interface';
import { CreateHotelDto, UpdateHotelDto } from '@/dtos/hotels.dto';

class HotelsService {
    public Hotel = hotelModel;
    public async findAllHotel(): Promise<hotel[]> {
        const users: hotel[] = await this.Hotel.find();
        return users;
    }

    public async findHotelById(hotel_id: string): Promise<hotel> {
        if (isEmpty(hotel_id)) throw new HttpException(400, 'Hotel Id is empty');
        const findHotel: hotel = await this.Hotel.findOne({ _id: hotel_id });
        if (!findHotel) throw new HttpException(409, "Hotel doesn't exist");
        return findHotel;
    }

    public async createHotel(hotelData: CreateHotelDto): Promise<hotel> {
        if (isEmpty(hotelData)) throw new HttpException(400, 'hotelData is empty');

        const createHotelData: hotel = await this.Hotel.create(hotelData);

        return createHotelData;
    }

    public async updateHotelById(hotelId: string, hotelData: UpdateHotelDto): Promise<hotel> {
        if (!hotelId) throw new HttpException(404, 'Hotel ID is required');

        const findHotel: hotel = await this.Hotel.findById(hotelId);
        if (!findHotel) throw new HttpException(404, 'Hotel not found');

        const updatedHotel: hotel = await this.Hotel.findByIdAndUpdate(hotelId, hotelData, { new: true });

        if (!updatedHotel) throw new HttpException(500, 'Failed to update hotel details');

        return updatedHotel;
    }

    public async deleteHotel(hotelId: string): Promise<hotel> {
        const deleteUserById: hotel = await this.Hotel.findByIdAndDelete(hotelId);
        if (!deleteUserById) throw new HttpException(409, "User doesn't exist");

        return deleteUserById;
    }
}

export default HotelsService;
