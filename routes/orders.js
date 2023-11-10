const express = require('express');
const { getOrder, createOrder, updateOrder, deleteOrder, updateDeliveryStatus, getOrderList, getOrders } = require('../services/orderServices')
<<<<<<< HEAD
const permission = require('./middlewares/permission'); // 유저인증 & 권한 체크
const router = express.Router();

// 주문은 app.js에서 미리 유저 체크
router.get('/', getOrderList) // 전체 주문 목록 조회
router.get('/:userId', permission('admin'), getOrders) // 주문 목록
router.get('/:id', getOrder) // 주문 조회
router.post('/:id', createOrder) // 주문 추가(완료)
router.put('/:id', updateOrder) // 주문 수정
router.delete('/:id', deleteOrder) // 주문 삭제
router.put('/:orderId', permission('admin'), updateDeliveryStatus) // 배송 상태 수정

module.exports = router;
=======
const permission = require('../middlewares/permission'); // 유저인증 & 권한 체크
const router = express.Router();

router.get('/:id', permission('user'), getOrder) // 주문 목록
router.post('/:id', permission('user'), createOrder) // 주문 추가(완료)
router.put('/:id', permission('user'), updateOrder) // 주문 수정

router.get('/', permission('admin'), getOrderList) // 전체 주문 목록 조회
router.put('/admin/:id', permission('admin'), updateOrder) // 주문 수정
router.delete('/admin/:id', permission('admin'), deleteOrder) // 주문 삭제
router.put('/admin/:id', permission('admin'), updateDeliveryStatus) // 배송 상태 수정

module.exports = router;
>>>>>>> onlyBack
