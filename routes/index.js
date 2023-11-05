const express = require('express');
const {createUser,authUser} = require('../services/user-services')

const router = express.Router();

router.get('/', (req, res) => {
      res.render('user/main')
});
router.get('/login', (req, res) => { // 로그인페이지 렌더링
    res.render('user/login');
});
router.get('/join', (req, res) => { // 회원가입페이지 렌더링
    res.render('user/join');
});

router.post('/login', authUser); // 유저 로컬 인증
router.post('/join', createUser); // 회원가입

router.get('/logout', (req, res, next) => { //로그아웃
    res.cookie('accessToken', null, { maxAge: 0 }) //쿠키 토큰 삭제
    res.redirect('/'); // 메인페이지로
});

module.exports = router;