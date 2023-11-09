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

module.exports = { createCategory, getCategory, updateCategory, deleteCategory };