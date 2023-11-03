const { Router } = require('express');
const passport = require('passport');
const { setUserToken } = require('../utils/jwt');
const router = Router();

// passport local 로 authenticate 하기
// passport.authenticate('local')
router.post('/',
   passport.authenticate('local', { session: false }),
   (req, res, next) => {
      setUserToken(res, req.user); // 유저의 토큰을 생성하고 res에 전달
      res.redirect('/');
   });

module.exports = router;
