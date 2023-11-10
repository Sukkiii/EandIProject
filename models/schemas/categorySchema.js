const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
<<<<<<< HEAD
=======
    categoryId: {
        type: String,
        required: true,
    },
>>>>>>> onlyBack
    categoryName: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
    categoryImage: [{
        type: String,
        default: "",
    }],
=======
>>>>>>> onlyBack
    categoryParent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
});

module.exports = categorySchema;