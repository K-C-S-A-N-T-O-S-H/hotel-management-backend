import { model, Schema, Document } from 'mongoose';
import { hotel } from '@interfaces/hotels.interface';

const hotelSchema: Schema = new Schema(
    {
        hotel_name: {
            type: String,
            required: [true, 'Please enter hotel name'],
        },
        hotel_address: {
            type: String,
            required: [true, 'Please enter hotel address'],
        },
        hotel_branch: {
            type: String,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
        created_by: {
            type: String,
            required: [true, 'please provide user name'],
        },
        updated_by: {
            type: String,
            default: null,
        },
        hotel_tables: {
            type: Array,
            default: null,
        },
        menu_type: {
            type: Array,
            default: null,
        },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);
hotelSchema.set('timestamps', true);
const hotelModel = model<hotel & Document>('hotel', hotelSchema);
export default hotelModel;
