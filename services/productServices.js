const asyncHandler = require('express-async-handler')
const { Product } = require('../models/model');

const getProduct = asyncHandler();
const createProduct = asyncHandler();
const updateProduct = asyncHandler();
const deleteProduct = asyncHandler();
module.exports = { getProduct, createProduct, updateProduct, deleteProduct };