const asyncHandler = require('express-async-handler')
const { User } = require('../models/model');

const getUserdata = asyncHandler();
const updateUserdata = asyncHandler();
const deleteUserdata = asyncHandler();
module.exports = { getUserdata, updateUserdata, deleteUserdata };