const express = require('express');
const userCheck = require('../middlewares/userCheck')
const { getOrder, createOrder, updateOrder, deleteOrder } = require('../services/orderServices')
const router = express.Router();

// 주문은 app.js에서 미리 유저 체크
// 최소 권한: user
router.get('/', getOrder) // 주문 조회
router.post('/', createOrder) // 주문 추가
router.put('/', updateOrder) // 주문 수정
router.put('/', finishOrder) // 주문 완료
router.delete('/:id', deleteOrder) // 주문 삭제

// 최소 권한: 판매자
router.post('/:id', permission('seller'), r) // 상품 추가
router.put('/:id', permission('seller'), updateOrder) // 상품 수정

// 최소 권한: 관리자

module.exports = router;