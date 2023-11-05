const { Router } = require('express');
const { setUserToken } = require('../utils/jwt');
const { User } = require('../models/model')
const asyncHandler = require('../utils/async-handler');
const hashPassword = require('../../utils/hash-password');

const router = Router();

router.post('/', asyncHandler(async (req, res, next) => {
   const { email, password } = req.body;
   const user = await User.findOne({ email });
   if (!user) {
      res.status(403).json('회원을 찾을 수 없습니다.');
   }
   // 검색 한 유저의 비밀번호와 요청된 비밀번호의 해쉬값이 일치하는지 확인
   if (user.password !== hashPassword(password)) {
      res.status(403).json('비밀번호가 일치하지 않습니다.');
   }
   next()
}))

router.post('/', asyncHandler(async (req, res, next) => {
   setUserToken(res, req.user); // 유저(req.user)의 토큰을 생성하고 res에 전달
   res.redirect('/');
   next()
}))

module.exports = router;