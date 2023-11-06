const express = require('express');
const asyncHandler = require('express-async-handler')
const userCheck = require('../middlewares/userCheck')
const router = express.Router();
const { Product } = require('../models/model');


module.exports = router;