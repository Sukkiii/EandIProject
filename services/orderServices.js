const asyncHandler = require('express-async-handler')
const { Order } = require('../models/model');

const getOrder = asyncHandler();
const createOrder = asyncHandler();
const updateOrder = asyncHandler();
const deleteOrder = asyncHandler(async (req, res) => {
   const product = await Product.findById(req.params.id)
})
module.exports = { getOrder, createOrder, updateOrder, deleteOrder };