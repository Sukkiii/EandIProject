const asyncHandler = require('express-async-handler')
const hashPassword = require('../utils/hash-password');
const { User } = require('../models/model');
const jwt = require('jsonwebtoken');
const secret = process.env.ACCESS_SECRET;

// 유저 로그인
const authUser = asyncHandler(async (req, res, next) => {
   const { email, password } = req.body;
   const user = await User.findOne({ email });
   if (user === null) {
      const error = new Error('이메일 또는 비밀번호 불일치입니다.');
      next(error);
      return;
   }

   if (user && user.password !== hashPassword(password)) {
      res.status(401)
      const error = new Error('이메일 또는 비밀번호 불일치입니다.');
      next(error);
      return;
   }  // 토큰 생성
   const token = jwt.sign({
      email: user.email,
      permission: user.permission
   },
      secret,
      { expiresIn: "10m" });
   // res.json({
   //    error: null,
   //    data: token,
   // })
   res.cookie('accessToken', token, { maxAge: 60000 })
   res.redirect('/')
   return;

})


//유저 생성
const createUser = asyncHandler(async (req, res) => {
   const { email, userName, password, birthDay, defaultAddress, userRole } = req.body;
   const hashedPassword = hashPassword(password); // 비밀번호 해쉬값 만들기
   let permissions; // 유저 권한 설정
   switch (userRole) {
      case 'admin':
         permissions = {
            C: { users: true, orders: true, products: true, categories: true, admin: true, seller: true },
            R: { users: true, orders: true, products: true, categories: true, admin: true, seller: true },
            U: { users: true, orders: true, products: true, categories: true, admin: true, seller: true },
            D: { users: true, orders: true, products: true, categories: true, admin: true, seller: true },
         };
         break;
      case 'seller':
         permissions = {
            C: { users: true, orders: true, products: true, seller: true },
            R: { users: true, orders: true, products: true, categories: true, seller: true },
            U: { users: true, orders: true, products: true, seller: true },
            D: { users: true, orders: true, products: true, seller: true },
         }
         break;
      default:
         permissions = {
            C: { users: true, orders: true, },
            R: { users: true, orders: true, products: true, categories: true, },
            U: { users: true, orders: true, },
            D: { users: true, orders: true, },
         };
   }

   const user = await User.create({ // 유저 생성
      email,
      userName,
      birthDay,
      defaultAddress,
      password: hashedPassword,
      userRole: userRole,
      permission: permissions
   })
   res.redirect('/'); // 생성후 메인페이지로
})

module.exports = { authUser, createUser };