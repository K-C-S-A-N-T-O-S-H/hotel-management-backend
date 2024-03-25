import { model, Schema, Document } from 'mongoose';
import { menuType } from '@interfaces/menuTypes.interface';

const menuTypeSchema: Schema = new Schema(
    {
        hotel_id: {
            type: String,
        },
        menu_name: {
            type: String,
        },
        from_time: {
            type: String,
            default: null,
        },
        to_time: {
            type: String,
            default: null,
        },
        is_active: {
            type: Boolean,
            default: 0,
        },
        create_by: {
            type: String,
            default: null,
        },
        updated_by: {
            type: String,
            default: null,
        },
        items: {
            type: Array,
            default: null,
        },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

menuTypeSchema.set('timestamps', true);

const menuTypeModel = model<menuType & Document>('menuTypes', menuTypeSchema);

export default menuTypeModel;
