const asyncHandler = require('express-async-handler')
const { Category, Product } = require('../models/model');

// 카테고리 생성
const createCategory = asyncHandler(async (req, res) => {
    const { categoryName, categoryImage, categoryParent } = req.body;

    const category = new Category({
        categoryName, categoryImage, categoryParent
    });

    if (!category) {
        res.status(404);
        throw new Error('카테고리 생성이 이루어지지 않았습니다.');
    }

    await category.save();

    res.json({ message: '카테고리가 추가되었습니다.' });;
});

// 카테고리 목록 조회 
const getCategory = asyncHandler(async (req, res) => {
    const categories = await Category.find({});

    if (!categories) {
        res.status(404);
        throw new Error('카테고리 조회에 실패하였습니다.');
    }

    res.json(categories);
});

// 카테고리 수정
const updateCategory = asyncHandler(async (req, res) => {
    const { categoryName, categoryImage, categoryParent } = req.body;

    const categoryId = req.params.id; // 수정할 카테고리 ID를 가져옴
    // 카테고리 수정
    const updatedCategory = await Category.updateOne(
        { _id: categoryId },
        { categoryName, categoryImage, categoryParent },
        { new: true },
    );

    if (!updatedCategory) {
        res.status(404);
        throw new Error('카테고리 수정이 이루어지지 않았습니다.');
    }

    res.json({ message: '카테고리가 수정되었습니다.' });
});

// 카테고리 삭제
const deleteCategory = asyncHandler(async (req, res) => {
    const categoryId = req.params.id;

    const deletedCategory = await Category.deleteOne({ _id: categoryId });

    if (!deletedCategory) {
        res.status(404);
        throw new Error('카테고리 삭제가 이루어지지 않았습니다.');
    }

    res.json({ message: '카테고리가 삭제되었습니다.' });
});

// 상위 카테고리 -> 상품조회
const getProductsByTopCategory = asyncHandler(async (req, res) => {
    const topCategoryId = req.params.id;
    const categories = await Category.find({categoryParent: topCategoryId });
    const categoryIds = categories.map(category => category._id);
    const products = await Product.find({ category: categoryIds });
    if (!products) {
        res.status(404)
        throw new Error('요청하신 상품들이 존재하지 않습니다.');
    }
    if (categories.length === 0) {
        res.status(404);
        throw new Error('카테고리가 존재하지 않습니다.');
    }
    res.json({products},{categories});
});

// 하위 카테고리 -> 상품조회
const getProductsByCategory = asyncHandler(async (req, res) => {
    // const topCategoryId = req.params.id1;
    const categoryId = req.params.id2;
    const products = await Product.find({ category: categoryId });
    if (!products) {
        res.status(404)
        throw new Error('요청하신 상품들이 존재하지 않습니다.');
    }
    res.json(products);
});

// 카테고리와 상품목록 둘다 불러오기
const getList = asyncHandler(async (req, res) => {
    const products = await Product.find({}).limit(10);
    if (products.length === 0) {
        res.status(404);
        throw new Error('상품이 존재하지 않습니다.');
    }
    const categories = await Category.find({});
    if (categories.length === 0) {
        res.status(404);
        throw new Error('카테고리가 존재하지 않습니다.');
    }
    res.json({products, categories});
});

module.exports = { createCategory, getCategory, updateCategory, deleteCategory, getProductsByCategory, getProductsByTopCategory, getList };