const JwtStrategy = require('passport-jwt').Strategy; // 요청된 JWT 토큰의 서명을 확인하고 인증하는 기능을 자동 구현
const { secret } = require('../../utils/jwt'); //./utils/jwt 의 secret 사용하기

const cookieExtractor = req => {
  // req 의 cookies 에서 token 사용하기
  const { token } = req.cookies; // === return req.cookies.token
  return token;
};

const opts = {
  secretOrKey: secret, // 비공개 키
  jwtFromRequest: cookieExtractor, // 요청받은 토큰
};

module.exports = new JwtStrategy(opts, (user, done) => {
  done(null, user); // 토큰을 받아서 디코딩함
});
