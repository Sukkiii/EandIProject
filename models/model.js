const mongoose = require('mongoose')

const userSchema = require('./schemas/userSchema');
const productSchema = require('./schemas/productSchema');
const orderSchema = require('./schemas/orderSchema');
const categorySchema = require('./schemas/categorySchema');

const User = mongoose.model('User', userSchema)
const Product = mongoose.model('Product', productSchema)
const Order = mongoose.model('Order', orderSchema)
const Category = mongoose.model('Category', categorySchema)

module.exports = { User, Product, Order, Category };