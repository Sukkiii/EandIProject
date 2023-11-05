const asyncHandler = require('../utils/async-handler');
const { User } = require('../models/model');
const jwt = require('jsonwebtoken');
const secret = 'elice'

// 유저 인가
const userPermit = asyncHandler(async (req, res, next) => {
   const accessToken = req.cookies.accessToken;
   const { email } = jwt.verify(accessToken, secret)
   const user = await User.findOne({ email }); // email 로 찾은 유저 데이터
   if (user) {
      try {
         next()
         return;
      } catch (error) {
         return res.status(404).send('유저 권한이 없습니다.')

      }
   }
})

// 관리자 인가
const adminPermit = asyncHandler(async (req, res, next) => {
   const accessToken = req.cookies.accessToken;
   const { email } = jwt.verify(accessToken, secret)
   const user = await User.findOne({ email }); // email 로 찾은 유저 데이터
   if (user && user.userRole === 3) {
      try {
         next()
         return;
      } catch (error) {
         return res.status(403).send('관리자 권한이 없습니다.')

      }
   }
})



module.exports = { userPermit, adminPermit }