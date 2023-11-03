const { Router } = require('express');
// const passport = require('passport');

const router = Router();

// passport local 로 authenticate 하기
// passport.authenticate('local')
router.post('/', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
