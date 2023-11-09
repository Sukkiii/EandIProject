const express = require('express');
const { getUserList, updateUser, deleteUser, getUser } = require('../services/userServices')
const router = express.Router();

router.put('/:id', updateUser) // 회원 정보 수정
router.delete('/:id', deleteUser) // 회원 삭제(탈퇴)
router.get('/:id', getUser) // 회원 정보 조회

router.get('/', getUserList) // 회원 목록 조회

module.exports = router;