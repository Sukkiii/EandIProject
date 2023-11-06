const express = require('express');
const { createUser, authUser } = require('../services/auth')
const userCheck = require('../middlewares/userCheck')

const router = express.Router();

// 유저 생성,로그인/아웃,인증
router.get('/', (req, res) => { res.render('user/main') });
router.get('/login', (req, res) => { res.render('user/login') });
router.get('/join', (req, res) => { res.render('user/join') });

router.post('/login', authUser);  // 로그인 
router.post('/join', createUser); // 회원가입
router.get('/logout', (req, res, next) => { //로그아웃
    res.cookie('accessToken', null, { maxAge: 0 }) //쿠키 토큰 삭제
    res.redirect('/'); // 메인페이지로
});

// 권한 체크
router.get('/admin', userCheck("R"), (req, res) => { res.render('user/admin') }); // 관리자 페이지로 이동
router.get('/users', userCheck("R"), (req, res) => { res.render('user/mypage') }); // 유저 페이지로 이동
router.get('/seller', userCheck("R"), (req, res) => { res.render('user/seller') }); // 판매자 페이지로 이동

module.exports = router;