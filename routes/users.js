const express = require('express');
const { getUserList, updateUser, deleteUser, getUser } = require('../services/userServices')
const permission = require('./middlewares/permission'); // 유저인증 & 권한 체크
const router = express.Router();

router.put('/:id', updateUser) // 회원 정보 수정
router.delete('/:id', deleteUser) // 회원 삭제(탈퇴)
router.get('/:id', getUser) // 회원 정보 조회

router.get('/',permission('admin'), getUserList) // 회원 목록 조회

module.exports = router;
