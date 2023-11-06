const { Schema } = require('mongoose');

const orderSchema = new Schema({
    orderId: {
        type: Number,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    productId: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    orderAddress: {
        type: String,
        required: true,
    },
    orderDate: {
        type: String,
        required: true,
        default: Date.now,
    },
    deliveryStatus: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    deleteAt: {
        type: Date,
        default: null
    },
}, {
    timestamps: true,
});

module.exports = orderSchema;