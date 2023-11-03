const { Schema } = require('mongoose');

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
});

module.exports = { categorySchema };