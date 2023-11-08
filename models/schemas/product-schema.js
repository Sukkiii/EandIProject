const { Schema } = require('mongoose');

const productSchema = new Schema({
    productId: {
        type: Number,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    categoryId: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    description: {
        type: String,
        required: true,
    },
    image: [{
        type: String,
        required: true,
    }],
    isDeleted: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true,
});

module.exports = { productSchema };