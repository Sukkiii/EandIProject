const express = require('express');
const { getCategory, createCategory, updateCategory, deleteCategory } = require('../services/categoryServices')
const permission = require('./middlewares/permission'); // 유저인증 & 권한 체크
const router = express.Router();

router.get('/', getCategory) // 카테고리 조회
router.post('/:id', permission('admin'), createCategory) // 카테고리 추가
router.put('/:id', permission('admin'), updateCategory) // 카테고리 수정
router.delete('/:id', permission('admin'), deleteCategory) // 카테고리 삭제

module.exports = router;
