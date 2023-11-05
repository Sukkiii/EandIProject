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
      // email: user.email,
      // name: user.userName,
      // userRole: user.userRole
      // })
      try {
         const accessToken = jwt.sign({
            email: user.email,
            userName: user.userName,
            userRole: user.userRole
         }, secret, { expiresIn: "30s" }); //(userinfo, secretKey, option, callback) {expiresIn: "30s"}
         // refresh Token을 payload없이 발급
         const refreshToken = jwt.sign({ // 오류 발생시 email, userName, userRole 추가하기
         }, secret, {
            algorithm: "HS256",
            expiresIn: "14d",
         });
         // refresh token 검증
         const refreshVerify = async (token, userId) => {
            // redis 모듈은 기본적으로 promise를 반환하지 못하기에, promisify를 이용하여 promise를 반환
            const getAsync = promisify(redisClient.get).bind(redisClient);

            try {
               const data = await getAsync(userId);
               if (token === data) {
                  try {
                     jwt.verify(token, secret);
                     return true;
                  } catch (err) {
                     return false;
                  }
               } else {
                  return false;
               }
            } catch (err) {
               return false;
            }
         };
         // 토큰을 쿠키로 전달
         res.cookie('accessToken', accessToken, { maxAge: 36000 });
         res.cookie('refreshToken', refreshToken, { maxAge: 36000 });
         res.redirect('/')
      } catch (error) {
         res.status(200).send('쿠키가 전달되지 않았습니다.')
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

// JWT Refresh Token 생성
module.exports = { authUser, createUser };