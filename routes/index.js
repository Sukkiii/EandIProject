const express = require("express");
// const permission = require('../middlewares/permission')
const usersRouter = require("../routes/users");
const productsRouter = require("../routes/products");
const ordersRouter = require("../routes/orders");
const categoriesRouter = require("../routes/categories");
const { signup, login, logout } = require("../services/userServices");
const { CategoryAndProducts } = require("../services/categoryServices");
const permission = require("../middlewares/permission"); // 유저인증 & 권한 체크
const router = express.Router();

// 로그인&아웃, 회원 가입
router.post('/signup', signup) // 회원가입
router.post('/login', login) // 로그인
router.delete('/logout', logout) // 로그아웃

// 각 라우터 연결
router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);
router.use('/categories', categoriesRouter);

//메인 페이지 및 상품 조회(비회원 기능)
router.get('/', CategoryAndProducts) // 전체 카테고리 & 상품 목록 조회

module.exports = router;