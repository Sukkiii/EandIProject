const express = require('express');
const { getCategories, createCategory, updateCategory, deleteCategory, getProductsByTopCategory, getProductsByCategory } = require('../services/categoryServices')
const permission = require('../middlewares/permission'); // 유저인증 & 권한 체크
const router = express.Router();

// router.get('/', getCategories) // 카테고리 조회
router.get('/:categoryId', getProductsByTopCategory) // 상위 카테고리 ->상품목록
router.get('/:categoryId1/:categoryId2', getProductsByCategory) // 상위 -> 하위 카테고리 상품목록

router.get('/admin', permission('admin'), getCategories) // 카테고리 목록 조회
router.post('/admin/:id', permission('admin'), createCategory) // 카테고리 추가
router.put('/admin/:id', permission('admin'), updateCategory) // 카테고리 수정
router.delete('/admin/:id', permission('admin'), deleteCategory) // 카테고리 삭제

module.exports = router;