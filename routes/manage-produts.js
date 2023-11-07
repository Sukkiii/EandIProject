const express = require('express');
const permission = require('../middlewares/permission')
const { addCategory, updateCategory, deleteCategory, createProduct, getProduct, getProductList, getProductDetail, deleteProduct } = require('../services/productServices');
const router = express.Router();

// 최소 권한: X
router.get('/', getCategory) // 카테고리 조회
router.get('/', getProduct) // 상품 조회
router.get('/', getProductList) // 상품 목록 조회
router.get('/', getProductDetail) // 상품 상세 조회

// 최소 권한: 판매자
router.post('/:id', permission('seller'), createProduct) // 상품 추가
router.put('/:id', permission('seller'), updateProduct) // 상품 수정
router.delete('/:id', permission('seller'), deleteProduct) // 상품 삭제

// 최소 권한: 관리자
router.post('/:id', permission('admin'), addCategory) // 카테고리 추가 
router.put('/:id', permission('admin'), updateCategory) // 카테고리 수정 
router.delete('/:id', permission('admin'), deleteCategory) // 카테고리 삭제 

module.exports = router;