const mongoose = require('mongoose');
const { Schema } = mongoose;

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
        default: Date.now,
    },
    deliveryStatus: {
        type: Number,
        enum: [1, 2, 3, 4], // 1: 결제완료, 2: 배송 준비중, 3: 배송중, 4: 배송 완료
        default: 1,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    deleteAt: {
        type: Date,
        default: null
    },
}, {
    timestamps: true,
});

module.exports = orderSchema;