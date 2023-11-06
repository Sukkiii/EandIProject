const asyncHandler = require('express-async-handler')
const productSchema = require('../models/schemas/productSchema')
module.exports = asyncHandler(async (req, res, next) => {
   const product = req.body;
   const { error } = productSchema.validate(product);
   if (error) {
      const validationError = { statusCode: 400, message: "잘못된 오더입니다." }
      next(validationError);
   } else {
      next();
   }
});