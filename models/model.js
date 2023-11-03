const mongoose = require('mongoose');

const userSchema = require('./schemas/user-schema');
const productSchema = require('./schemas/product-schema');
const orderSchema = require('./schemas/order-schema');
const categorySchema = require('./schemas/category-schema');

const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);
const Order = mongoose.model('Order', orderSchema);
const Category = mongoose.model('Category', categorySchema);

module.exports = { User, Product, Order, Category };