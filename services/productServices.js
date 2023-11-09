const asyncHandler = require('express-async-handler')
const { Product } = require('../models/model');

// 상품 목록 조회
const getProductList = asyncHandler(async (req, res) => {
    const products = await Product.find({}).limit(10);
    if (products.length === 0) {
        res.status(404);
        throw new Error('상품이 존재하지 않습니다.');
    }
    res.json(products);
});

// 상품 조회
const getProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const products = await Product.findById(productId).populate("category");

    if (!products) {
        res.status(404);
        throw new Error('상품이 존재하지 않습니다.');
    }
    res.json(products);
});

// 상품 추가
const createProduct = asyncHandler(async (req, res) => {
    const { image, description, price, productName, stock  } = req.body;

    const product = new Product({
        image,
        description,
        price,
        productName,
        stock,
    });

    if (!(product.productName)) {
        res.status(404);
        throw new Error('상품 이름을 입력하지 않았습니다.');
    } else if (!(product.image)) {
        res.status(404);
        throw new Error('이미지 업로드하는데 문제가 발생하였습니다.');
    } else if (!(product.price)) {
        res.status(404);
        throw new Error('상품 가격을 입력하지 않았습니다.');
    } else if (!(product.description)) {
        res.status(404);
        throw new Error('상품 설명을 입력하지 않았습니다.');
    } else if (!(product.stock)) {
        res.status(404);
        throw new Error('재고를 입력하지 않았습니다.');
    }

    await product.save(); // 상품 저장
    res.status(201).json('상품을 추가하였습니다.');
});

// 상품 수정
const updateProduct = asyncHandler(async (req, res) => {
    const { image, description, price, productName, stock } = req.body;
    
    const productId = req.params.id; // 업데이트할 상품 ID를 가져옴
    // 상품 업데이트
    const updatedProduct = await Product.updateOne(
        { _id: productId },
        { $set: { image, description, price, productName, stock } },
    );

    if (updatedProduct.nModified === 0) {
        throw new Error('상품 추가하는데 오류가 발생하였습니다.');
    } else if (!image && !description && !price && !productName && !stock && (productName.length === 0) && (description.length === 0) &&  (image.length === 0)) {
        throw new Error('속성 값을 기재하지 않았습니다.');
    }

    res.json({ message: '상품을 수정하였습니다.' });
});

// 상품 삭제
const deleteProduct = asyncHandler(async (req, res) => {

    const findId = await Product.findById(req.params.id);
    
    if (!findId) {
        throw new Error('상품을 찾을 수 없습니다.');
    }

    const productId = await Product.deleteOne({ _id: req.params.id });

    res.json({ message: '상품이 삭제되었습니다.' });
});

module.exports = { getProductList, getProduct, createProduct, updateProduct, deleteProduct };

/* */