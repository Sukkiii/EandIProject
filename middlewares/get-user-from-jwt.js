const passport = require('passport');

module.exports = (req, res, next) => {
   if (!req.cookies.token) { // 쿠키에 token 없다면?
      next(); // 다음 미들웨어 실행
      return;
   }
   // 쿠키에 토큰이 있다면?
   // 아래 함수를 호출하여 사용자 인증
   return passport.authenticate('jwt', { session: false })(req, res, next);
}

