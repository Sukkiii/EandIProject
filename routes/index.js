const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("유저 페이지 입니다.");
});

module.exports = router;