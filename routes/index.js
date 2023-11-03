const express = require('express');
const { User } = require('../models/model');
const hashPassword = require('../utils/hash-password');
const router = express.Router();

router.get('/', (req, res) => { // 로그인 페이지로 이동
    res.redirect('/login');
});

router.get('/login', (req, res, next) => { // 로그인페이지 렌더링
    res.render('user/login');
});

router.get('/join', (req, res, next) => { // 회원가입페이지 렌더링
    res.render('user/join');
});

router.post('/join', (async (req, res) => { // 유저생성
    const { email, userName, password } = req.body;
    const hashedPassword = hashPassword(password); // 비밀번호 해쉬값 만들기
    const user = await User.create({
        email,
        userName,
        password: hashedPassword,
    });
    console.log('신규 회원', user);
    res.redirect('/'); // 생성 후 메인페이지로
}));

router.get('/logout', (req, res, next) => { //로그아웃
    req.logout();
    res.redirect('/'); // 메인페이지로
});

module.exports = router;