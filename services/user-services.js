const asyncHandler = require('../utils/async-handler');
const hashPassword = require('../utils/hash-password');
const { User } = require('../models/model');
const jwt = require('jsonwebtoken');
const secret = 'elice';

// 유저 인증
const authUser = asyncHandler(async (req, res) => {
   const { email, password } = req.body;
   console.log(email)
   const user = await User.findOne({ email });
   if (user && user.password !== hashPassword(password)) {
      res.status(403)
      throw new Error('이메일 또는 비밀번호 불일치입니다.');
   } else {
      // res.json({
      //    email: user.email,
      //    name: user.userName,
      //    userRole: user.userRole
      // })
      try {
         const accessToken = jwt.sign({
            email: user.email,
            userName: user.userName,
            userRole: user.userRole
         }, secret, { expiresIn: "1h" }); //(userinfo, secretKey, option, callback) {expiresIn: "30s"}
         // 토큰을 쿠키로 전달
         res.cookie('accessToken', accessToken, { maxAge: 36000 });
         res.redirect('/')
      } catch (error) {
         res.status(200).send('쿠키가 전달이 안되었습니다.')
      }
   }
})

//유저 생성
const createUser = asyncHandler(async (req, res) => {
   const { email, userName, password, birthDay, defaultAddress } = req.body;
   const hashedPassword = hashPassword(password); // 비밀번호 해쉬값 만들기
   const user = await User.create({ // 유저 생성
      email,
      userName,
      birthDay,
      defaultAddress,
      password: hashedPassword,
   })
   // res.json(user)
   // console.log('신규 회원', user);
   res.redirect('/'); // 생성후 메인페이지로
})

// 유저 토큰 발행

module.exports = { authUser, createUser };