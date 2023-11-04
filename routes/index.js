const express = require('express');
const { User } = require('../models/model');
const hashPassword = require('../utils/hash-password');
const asyncHandler = require('../utils/async-handler');

const router = express.Router();

router.get('/', (req, res) => { 
    if(req.user && req.user.userRole === 3){
        res.redirect('/admin'); // 관리자는 /admin 로 이동
        return;
    }
    if(req.user && req.user.userRole === 2){
        res.redirect('/seller'); // 판매자는 /seller이동
        return;
    }
    if(req.user && req.user.userRole === 1) { // 유저확인
        res.redirect('/users'); // 맞다면 /users 로 이동
        return;
      }
    res.redirect('/login'); // 로그인 페이지로 이동
});

router.get('/login', (req, res, next) => { // 로그인페이지 렌더링
    res.render('user/login');
});

router.get('/join', (req, res, next) => { // 회원가입페이지 렌더링
    res.render('user/join');
});

router.post('/join', asyncHandler(async (req, res) => { 
    const { email, userName, password, birthDay, defaultAddress } = req.body;
    const hashedPassword = hashPassword(password); // 비밀번호 해쉬값 만들기
    const user = await User.create({ // 유저 생성
        email,
        userName,
        birthDay,
        defaultAddress,
        password: hashedPassword,
    })
    // res.json(user)
    console.log('신규 회원', user);
    res.redirect('/'); // 생성후 메인페이지로
}));

router.get('/logout', (req, res, next) => { //로그아웃
    res.cookie('token', null, { maxAge: 0 }) //쿠키 토큰 삭제
    res.redirect('/'); // 메인페이지로
});

module.exports = router;