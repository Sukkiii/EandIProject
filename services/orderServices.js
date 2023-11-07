const asyncHandler = require('express-async-handler');
const { Order } = require('../models/model');

// 주문 조회
const getOrder = asyncHandler(async (req, res) => {
   const orders = await Order.find({});
   res.json(orders);
});

// 주문 추가
const addOrder = asyncHandler(async (req, res) => {
   const { productId, quantity } = req.body;

   const order = new Order({
      productId,
      quantity,
   });

   await order.save();

   res.status(201).json(order);
});

// 주문 수정
const updateOrder = asyncHandler(async (req, res) => {
   const { productId, quantity } = req.body;
   
   const orderId = req.params.id;

   const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { productId, quantity },
      { new: true },
   );

   if(!updatedOrder){
      return res.status(404).json({ error: '주문을 찾을 수 없습니다. '});
   }

   res.json(updatedOrder);
});

// 주문 삭제
const deleteOrder = asyncHandler(async (req, res) => {
   const orderId = req.params.id;

   const deletedOrder = await Order.findByIdAndRemove(orderId);

   if(!deletedOrder){
      return res.status(404).json({ error: '주문을 찾을 수 없습니다.'});
   }

   res.json({ message: '주문이 삭제되었습니다.'});
});

module.exports = { getOrder, addOrder, updateOrder, deleteOrder }; 