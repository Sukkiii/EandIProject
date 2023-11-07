const express = require('express');
const permission = require('../middlewares/permission')
const {getUserdata, updateUserdata } = require('../services/userServices')
const router = express.Router();


module.exports = router;