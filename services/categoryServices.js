const asyncHandler = require('express-async-handler')
const { Category } = require('../models/model');

// 카테고리 생성
const createCategory = asyncHandler(async (req, res) => {
    const { categoryName } = req.body;

   const category = new Category({
      categoryName,
   });
   
   if (!category) {
      res.status(404);
      throw new Error('카테고리 생성이 이루어지지 않았습니다.');
   }

   await category.save();

   res.json({ message: '카테고리가 추가되었습니다.'});;
});

// 카테고리 조회 
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
    const { categoryName } = req.body;

    const categoryId = req.params.id; // 수정할 카테고리 ID를 가져옴
    // 카테고리 수정
    const updatedCategory = await Category.updateOne(
        {categoryId},
        { categoryName },
        { new: true },
    );

    if(!updatedCategory) {
        return res.status(404).json({ error: '카테고리 수정하는데 실패하였습니다.' });
    }

    res.json({ message: '카테고리가 수정되었습니다.'});
});

// 카테고리 삭제
const deleteCategory = asyncHandler(async (req, res) => {
    const categoryId = req.params.id;

    const deletedCategory = await Category.updateOne(categoryId);
 
    if(!deletedCategory){
       return res.status(404).json({ error: '카테고리 삭제하는데 실패하였습니다.'});
    }
 
    res.json({ message: '카테고리가 삭제되었습니다.'});
});

// 카테고리 -> 상품조회
const getProductByCategory = asyncHandler(async (req, res) => {
    const topCategoryId = req.params.id;

    // 상위 카테고리와 그 하위 카테고리를 모두 찾습니다.
    const categories = await Category.find({
        $or: [
            { _id: topCategoryId },
            { categoryParent: topCategoryId }
        ]
    });

    // 찾은 카테고리의 ID를 추출합니다.
    const categoryIds = categories.map(category => category._id);

    // Product 모델에서 category 필드가 categoryIds 중 하나와 일치하는 모든 상품을 찾습니다.
    const products = await Product.find({ category: { $in: categoryIds } });

    // 찾은 상품을 응답으로 반환합니다.
    res.json(products);
});

module.exports = { createCategory, getCategory, updateCategory, deleteCategory, getProductByCategory };
