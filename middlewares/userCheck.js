const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken');
const secret = process.env.ACCESS_SECRET

module.exports = (crud) => asyncHandler(async (req, res, next) => {
   const token = req.cookies.accessToken;
   if (token === undefined) { // 쿠키에 토큰 존재 여부
      const error = { statusCode: 401, message: "권한이 없거나 인증되지 않은 유저입니다." }
      next(error);
   }
   const user = jwt.verify(token, secret); // 토큰 검사
   // 권한 유무 체크
   switch (true) {
      case req.url === '/products' && user.permission[crud]?.products:
         next();
         return;
      case req.url === '/orders' && user.permission[crud]?.orders:
         next();
         return;
      case req.url === '/users' && user.permission[crud]?.users:
         next();
         return;
      case req.url === '/categories' && user.permission[crud]?.categories:
         next();
         return;
      case req.url === '/admin' && user.permission[crud]?.admin:
         next();
         return;
      case req.url === '/seller' && user.permission[crud]?.seller:
         next();
         return;
      default: false
   }
   const error = { statusCode: 403, message: "접근이 제한되었습니다." }
   next(error);
})