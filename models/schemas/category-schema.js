const mongoose = require('mongoose');

const categorySchema = new Schema({
    categoryId: {
        type: Number,
        required: true,
    },
    categoryName: {
        type: String,
        required: true,
    },
    categoryImage: [{
        type: String,
        required: true,
    }],
    // parent: {
    //     type: mongoose.Schema.Types.ObjectId
    // },
})

const Category = mongoose.model('Category', categorySchema);

module.exports = { Category };