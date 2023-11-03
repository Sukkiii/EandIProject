const passport = require('passport');

const local = require('./strategies/local');
const jwt = require('./strategies/jwt');
module.exports = () => {
  // jwt strategy 사용
  passport.use(local);
  passport.use(jwt);
};
