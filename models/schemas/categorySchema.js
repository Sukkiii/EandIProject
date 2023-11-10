const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    categoryId: {
        type: String,
        required: true,
    },
    categoryName: {
        type: String,
        required: true,
    },
    categoryParent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
});

module.exports = categorySchema;