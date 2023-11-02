const mongoose = require('mongoose');
const { Schema } = require('./schemas');

const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);
const Order = mongoose.model('Order', orderSchema);
const Category = mongoose.model('Category', categorySchema);

module.exports = { User, Product, Order, Category };