const express = require('express');
const { getCategory, createCategory, updateCategory, deleteCategory } = require('../services/categoryServices')
const router = express.Router();

router.get('/', getCategory) // 카테고리 조회
router.post('/:id', createCategory) // 카테고리 추가
router.put('/:id', updateCategory) // 카테고리 수정
router.delete('/:id', deleteCategory) // 카테고리 삭제

module.exports = router;