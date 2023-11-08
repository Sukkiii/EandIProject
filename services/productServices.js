const asyncHandler = require('express-async-handler')
const { Product } = require('../models/model');

// 상품 목록 조회
const getProductList = asyncHandler(async (req, res) => {
    const products = await Product.find({}).limit(10);
    if (!products) {
        res.status(404);
        throw new Error('상품이 존재하지 않습니다.');
    }
    res.json(products);
});

// 상품 조회
const getProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const products = await Order.findById(productId);

    if (!products) {
        res.status(404);
        throw new Error('상품이 존재하지 않습니다.');
    }
    res.json(products);
});

// 상품 추가
const createProduct = asyncHandler(async (req, res) => {
    const { name, description, price } = req.body;

    const product = new Product({
        name,
        description,
        price,
    });

    if (!product) {
        res.status(404);
        throw new Error('상품 추가하는데 오류가 발생하였습니다.');
    }

    await product.save(); // 상품 저장
    res.status(201).json('상품을 추가하였습니다.');
});

// 상품 수정
const updateProduct = asyncHandler(async (req, res) => {
    const { name, description, price } = req.body;

    const productId = req.params.id; // 업데이트할 상품 ID를 가져옴
    // 상품 업데이트
    const updatedProduct = await Product.updateOne(
        { productId },
        { name, description, price },
        { new: true },
    );

    if (!updatedProduct) {
        return res.status(404).json({ error: '상품 수정하는데 실페하였습니다.' });
    }
});

// 상품 삭제
const deleteProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id;

    const deletedProduct = await Product.updateOne(productId);

    if (!deletedProduct) {
        return res.status(404).json({ error: '상품을 찾을 수 없습니다.' });
    }

    res.json({ message: '상품이 삭제되었습니다.' });
});
module.exports = { getProductList, getProduct, createProduct, updateProduct, deleteProduct };

/* */