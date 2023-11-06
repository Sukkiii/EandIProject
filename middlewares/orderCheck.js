const asyncHandler = require('express-async-handler')
const orderSchema = require('../models/schemas/orderSchema')
module.exports = asyncHandler(async (req, res, next) => {
   const order = req.body;
   const { error } = orderSchema.validate(order);
   if (error) {
      const validationError = { statusCode: 400, message: "잘못된 오더입니다." }
      next(validationError);
   } else {
      next();
   }
});
