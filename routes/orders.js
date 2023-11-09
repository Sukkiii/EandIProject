const express = require('express');
const { getOrder, createOrder, updateOrder, deleteOrder, updateDeliveryStatus, getOrderList, getOrders } = require('../services/orderServices')
const permission = require('../middlewares/permission'); // 유저인증 & 권한 체크
const router = express.Router();

// 주문은 app.js에서 미리 유저 체크
router.get('/', permission('admin'), getOrderList) // 전체 주문 목록 조회
router.get('/:id1', getOrder) // id1유저의 주문 목록
router.post('/:id1/:id2', createOrder) // id1유저의 id2 주문 추가(완료)
router.put('/:id1/:id2', updateOrder) // 주문 수정
router.delete('/:id1/:id2', deleteOrder) // 주문 삭제
// router.put('/:id', permission('admin'), updateDeliveryStatus) // 배송 상태 수정

module.exports = router;