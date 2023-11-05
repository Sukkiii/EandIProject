const express = require('express');
const asyncHandler = require('../utils/async-handler');

const router = express.Router();

router.get('/', (req,res) => {
   res.render('./user/mypage')
})

module.exports = router;