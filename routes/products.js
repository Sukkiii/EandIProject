const express = require('express');
const { createProduct, getProductList, getProduct, deleteProduct, updateProduct } = require('../services/productServices');
const permission = require('../middlewares/permission'); // 유저인증 & 권한 체크
const router = express.Router();

router.get('/:id', getProduct) // 상품 조회
router.get('/', getProductList) // 상품 목록 조회

router.post('/:id', permission('admin'), createProduct) // 상품 추가
router.put('/:id', permission('admin'), updateProduct) // 상품 수정
router.delete('/:id', permission('admin'), deleteProduct) // 상품 삭제

module.exports = router;