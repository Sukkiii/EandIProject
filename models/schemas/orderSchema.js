const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    orderProduct: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    }],
    quantity: {
        type: Number,
        required: true,
    },
    orderAddress: {
        type: String,
        required: true,
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    deliveryStatus: {
        type: Number,
        enum: [1, 2, 3, 4], // 1: 결제완료, 2: 배송 준비중, 3: 배송중, 4: 배송 완료
        default: 1,
    },
    description: {
        type: String,
        default: "",
    },
    totalPrice: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = orderSchema;
