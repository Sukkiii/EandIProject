const express = require('express');
const { getOrder, createOrder, updateOrder, deleteOrder, updateDeliveryStatus, getOrderList, getOrders } = require('../services/orderServices')
const router = express.Router();

// 주문은 app.js에서 미리 유저 체크
router.get('/', getOrderList) // 전체 주문 목록 조회
router.get('/:userId', getOrders) // 주문 목록
router.get('/:id', getOrder) // 주문 조회
router.post('/:id', createOrder) // 주문 추가(완료)
router.put('/:id', updateOrder) // 주문 수정
router.delete('/:id', deleteOrder) // 주문 삭제
router.put('/:id', updateDeliveryStatus) // 배송 상태 수정

module.exports = router;