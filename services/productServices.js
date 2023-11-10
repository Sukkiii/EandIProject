const asyncHandler = require('express-async-handler')
const { Product } = require('../models/model');

<<<<<<< HEAD
// 상품 목록 조회
const getProductList = asyncHandler(async (req, res) => {
    const products = await Product.find({}).limit(10);
=======
// 상품 목록 조회(최신순)
const getProductList = asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort('-createdAt').limit(10);
>>>>>>> onlyBack
    if (products.length === 0) {
        res.status(404);
        throw new Error('상품이 존재하지 않습니다.');
    }
<<<<<<< HEAD
    res.json(products);
});

// 상품 조회
const getProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const products = await Product.findById(productId);
=======
    // //이미지파일 보내기
    // const imagePath = path.join(__dirname, 'views/uploads/my-image.jpg'); // 이미지 파일의 경로를 설정합니다.
    // res.sendFile(imagePath); // 이미지 파일을 응답으로 보냅니다.

    res.json(products);
});
/* 상품 목록 조회(1page / 10 items)
const getProductList = asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1; // 페이지 번호를 가져옵니다. 기본값은 1입니다.
    const limit = 10; // 페이지당 상품 수
    const skip = (page - 1) * limit; // 건너뛸 상품 수

    const products = await Product.find({}).sort('-createdAt').skip(skip).limit(limit);

    if (products.length === 0) {
        res.status(404);
        throw new Error('상품이 존재하지 않습니다.');
    }

    res.json(products);
});*/
// 상품 상세 조회
const getProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId).populate("category");
>>>>>>> onlyBack

    if (!products) {
        res.status(404);
        throw new Error('상품이 존재하지 않습니다.');
    }
<<<<<<< HEAD
    res.json(products);
=======
    //이미지 파일 보내기
    // const image = product.productName
    // const imagePath = path.join(__dirname, `views/images/${image}.jpg`); // 이미지 파일의 경로를 설정합니다.
    // res.sendFile(imagePath); // 이미지 파일을 응답으로 보냅니다.
    res.json(product);

>>>>>>> onlyBack
});

// 상품 추가
const createProduct = asyncHandler(async (req, res) => {
<<<<<<< HEAD
    const { image, description, price, productName, stock  } = req.body;
=======
    const { image, description, price, productName, stock } = req.body;

    const imageFiles = req.files; // 이미지 파일들에 접근
>>>>>>> onlyBack

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
<<<<<<< HEAD
    
=======

>>>>>>> onlyBack
    const productId = req.params.id; // 업데이트할 상품 ID를 가져옴
    // 상품 업데이트
    const updatedProduct = await Product.updateOne(
        { _id: productId },
        { $set: { image, description, price, productName, stock } },
    );

    if (updatedProduct.nModified === 0) {
        throw new Error('상품 추가하는데 오류가 발생하였습니다.');
<<<<<<< HEAD
    } else if (!image && !description && !price && !productName && !stock && (productName.length === 0) && (description.length === 0) &&  (image.length === 0)) {
=======
    } else if (!image && !description && !price && !productName && !stock && (productName.length === 0) && (description.length === 0) && (image.length === 0)) {
>>>>>>> onlyBack
        throw new Error('속성 값을 기재하지 않았습니다.');
    }

    res.json({ message: '상품을 수정하였습니다.' });
});

// 상품 삭제
const deleteProduct = asyncHandler(async (req, res) => {

    const findId = await Product.findById(req.params.id);
<<<<<<< HEAD
    
=======

>>>>>>> onlyBack
    if (!findId) {
        throw new Error('상품을 찾을 수 없습니다.');
    }

    const productId = await Product.deleteOne({ _id: req.params.id });

    res.json({ message: '상품이 삭제되었습니다.' });
});

<<<<<<< HEAD
module.exports = { getProductList, getProduct, createProduct, updateProduct, deleteProduct };

/* */
=======
module.exports = { getProductList, getProduct, createProduct, updateProduct, deleteProduct };
>>>>>>> onlyBack
