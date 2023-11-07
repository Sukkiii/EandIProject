const mongoose = require('mongoose');
const { Schema } = mongoose;

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
    },
    categoryId: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: [{
        type: String,
        required: true,
    }],
}, {
    timestamps: true,
});

module.exports = productSchema;