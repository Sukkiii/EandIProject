const asyncHandler = require('express-async-handler');
const { Order } = require('../models/model');

// 주문 목록 조회
const getOrderList = asyncHandler(async (req, res) => {
   const orders = await Order.find({});
   if (!orders) {
      res.status(404);
      throw new Error('주문상품이 존재하지 않습니다.');
   }
   res.json(orders);
});
// 주문 조회
const getOrder = asyncHandler(async (req, res) => {
   const orderId = req.params.orderId;
   const order = await Order.findById(orderId);
   if (!order) {
      res.status(404);
      throw new Error('사용자가 존재하지 않습니다.');
   }
   res.json(order);
})

// 주문 신청
const createOrder = asyncHandler(async (req, res) => {
   const { orderId, productId, userName, phoneNumber, orderAddress, deliveryStatus, totalPrice } = req.body;

   const order = new Order({
      orderId,
      productId,
      quantity,
      userName,
      phoneNumber,
      orderAddress,
      deliveryStatus,
      totalPrice
   });

   if (!order) {
      res.status(404);
      throw new Error('주문이 신청되지 않았습니다.');
   }

   await order.save();

   res.json({ message: '주문이 완료되었습니다.' });;
});

// 주문 수정
const updateOrder = asyncHandler(async (req, res) => {
   const { productId, quantity, userName, phoneNumber, orderAddress } = req.body;

   const orderId = req.params.orderId;

   const updatedOrder = await Order.updateOne(
      {orderId},
      { productId, quantity },
      { new: true },
   );

   if (!updatedOrder) {
      return res.status(404).json({ error: '주문을 찾을 수 없습니다. ' });
   }

   res.json({ message: '주문이 수정되었습니다.' });
});

// 주문 삭제
const deleteOrder = asyncHandler(async (req, res) => {
   const orderId = req.params.id;

   const deletedOrder = await Order.updateOne({orderId});

   if (!deletedOrder) {
      return res.status(404).json({ error: '주문을 찾을 수 없습니다.' });
   }

   res.json({ message: '주문이 삭제되었습니다.' });
});

// 배송 상태 수정
const updateDeliveryStatus = asyncHandler(async (req, res) => {
   const orderId = req.params.orderId;
   const newStatus = req.body.deliveryStatus; // 새로운 state 값을 요청 본문에서 가져옵니다.
   const order = await Order.findById(orderId);
   if (!order) {
      res.status(404);
      throw new Error('주문이 존재하지 않습니다.');
   }
   order.state = newStatus; // 주문의 state 값을 업데이트합니다.
   const updatedStatus = await order.save(); // 변경된 주문을 저장합니다.
   res.json(updatedStatus); // 업데이트된 주문을 반환합니다.
})


module.exports = { getOrder, createOrder, updateOrder, deleteOrder, getOrderList, updateDeliveryStatus }; 