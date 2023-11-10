const express = require('express');
const { getOrder, createOrder, updateOrder, deleteOrder, updateDeliveryStatus, getOrderList, getOrders } = require('../services/orderServices')
const permission = require('../middlewares/permission'); // 유저인증 & 권한 체크
const router = express.Router();

router.put('/admin/:id', permission('admin'), updateOrder) // 주문 수정
router.delete('/admin/:id', permission('admin'), deleteOrder) // 주문 삭제
router.put('/admin/:id', permission('admin'), updateDeliveryStatus) // 배송 상태 수정
router.get('/admin', permission('admin'), getOrderList) // 전체 주문 목록 조회

router.get('/:id', permission('user'), getOrder) // 주문 목록
router.post('/:id', permission('user'), createOrder) // 주문 추가(완료)
router.put('/:id', permission('user'), updateOrder) // 주문 수정
module.exports = router;
