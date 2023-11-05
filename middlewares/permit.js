const asyncHandler = require('../utils/async-handler');
const { User } = require('../models/model');
const jwt = require('jsonwebtoken');
const secret = 'elice'

const permit = asyncHandler(async (req, res, next) => {
   const accessToken = req.cookies.accessToken;
   const { email } = jwt.verify(accessToken, secret)
   const user = await User.findOne({ email }); // email 로 찾은 유저 데이터
   if (user && user.userRole === 3) {
      try {
         next()
         return;
      } catch (error) {
         return res.status(404).redirect('/').json(error)
      }
   }
})

module.exports = permit