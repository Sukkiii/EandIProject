const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    // userId: {
    //     type: String,
    //     required: true,
    // },
    birthDay: {
        type: Date,
        required: true,
        default: Date.now,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        detailAddress: { type: String },
    },
    userRole: {
        type: Number,
        required: true,
        default:1, 
    },
    deleteAt: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true,
});

// const User = mongoose.model('User', userSchema);

// module.exports = { User };