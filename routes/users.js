const express = require('express');
const userCheck = require('../middlewares/userCheck')
const {getUserdata, updateUserdata } = require('../services/userServices')
const router = express.Router();

router.get('/:id', userCheck('R'), getUserdata) // 정보목록 가져오기
router.put('/:id', userCheck('U'), updateUserdata) // 정보 수정하기

module.exports = router;