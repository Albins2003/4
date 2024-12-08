import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    },
});

const Item = mongoose.model('Item', itemSchema);
export default Item;
