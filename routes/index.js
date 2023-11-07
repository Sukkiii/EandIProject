const express = require('express');
const accountRouter = require('../routes/account');
const adminRouter = require('../routes/admin');
const userCheck = require('../middlewares/userCheck')

const router = express.Router();

// 유저 생성,로그인/아웃,인증
router.get('/account', accountRouter) // 정보목록 가져오기
router.get('/admin', adminRouter)
module.exports = router;