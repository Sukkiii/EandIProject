const express = require("express");
// const permission = require('../middlewares/permission')
<<<<<<< HEAD
const usersRouter = require('../routes/users');
const productsRouter = require('../routes/products');
const ordersRouter = require('../routes/orders');
const categoriesRouter = require('../routes/categories');
<<<<<<< HEAD
const { getProduct, getProductList } = require('../services/productServices');
const { signup, login, logout } = require('../services/userServices');
const { getProductByCategory } = require('../services/categoryServices');
=======
const { signup, login, logout } = require('../services/userServices');
const {  CategoryAndProducts } = require('../services/categoryServices');
const permission = require('../middlewares/permission'); // 유저인증 & 권한 체크
>>>>>>> onlyBack
=======
const usersRouter = require("../routes/users");
const productsRouter = require("../routes/products");
const ordersRouter = require("../routes/orders");
const categoriesRouter = require("../routes/categories");
const { getProduct, getProductList } = require("../services/productServices");
const { signup, login, logout } = require("../services/userServices");
const { getProductByCategory } = require("../services/categoryServices");
>>>>>>> 298ba752c6202e3864861b452b5a2e203d8847a6
const router = express.Router();

// 로그인&아웃, 회원 가입
router.post("/signup", signup); // 회원가입
router.post("/login", login); // 로그인
router.delete("/logout", logout); // 로그아웃

<<<<<<< HEAD
//메인 페이지 및 상품 조회
router.get("/categories/:id", getProductsByTopCategory); // 상위 카테고리 ->상품목록
router.get("/categories/:id1/:id2", getProductsByCategory); // 상위 -> 하위 카테고리 상품목록
router.get("/", getList); // 상품 목록 조회
router.get("/products/:id", getProduct); // 상품 조회

// 관리자
router.use("/admin/users", usersRouter);
router.use("/admin/products", productsRouter);
router.use("/admin/orders", ordersRouter);
router.use("/admin/categories", categoriesRouter);
// 판매자
router.use("/seller/users", usersRouter);
router.use("/seller/products", productsRouter);
router.use("/seller/orders", ordersRouter);
// 유저
router.use("/user/users", usersRouter);
router.use("/user/products", productsRouter);
router.use("/user/orders", ordersRouter);

module.exports = router;
=======
//메인 페이지 및 상품 조회(비회원 기능)
router.get('/', CategoryAndProducts) // 전체 카테고리 & 상품 목록 조회

// 각 라우터 연결
router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);
router.use('/categories', categoriesRouter);
module.exports = router;
>>>>>>> onlyBack
