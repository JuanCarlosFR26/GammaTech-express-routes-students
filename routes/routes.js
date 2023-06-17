const express = require('express');
const { getAllUsers } = require('../controllers/controllers');
const router = express.Router();

router.get('/', getAllUsers)


module.exports = router;