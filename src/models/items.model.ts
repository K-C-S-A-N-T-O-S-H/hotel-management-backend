import { model, Schema, Document } from 'mongoose';
import { items } from '@interfaces/items.interface';

const itemSchema: Schema = new Schema({
    hotel_id: {
        type: String,
    },
    menu_id: {
        type: String,
    },
    item_name: {
        type: String,
    },
    item_price: {
        type: Number,
        default: null,
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
    subItems: {
        type: Array,
        default: null,
    },
});

itemSchema.set('timestamps', true);

const itemModel = model<items & Document>('items', itemSchema);

export default itemModel;
