const express = require('express');
const permission = require('../middlewares/permission')
const { signup, login, logout, getUserList, updateUser, deleteUser, getUser } = require('../services/userServices')
const router = express.Router();

// 최소 권한: X
router.post('/signup', signup) // 회원가입
router.post('/login', login) // 로그인
router.delete('/logout', logout) // 로그아웃

// 최소 권한: 판매자
router.put('/:id', permission('user'), updateUser) // 회원 수정
router.delete('/:id', permission('user'), deleteUser) // 회원 탈퇴
router.get('/:id', permission('user'), getUser) // 회원 조회

// 최소 권한: 관리자
router.get('/', permission('admin'), getUserList) // 회원 목록 조회

module.exports = router;