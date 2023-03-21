const express = require('express');
const { createAddress } = require('../controllers/addressController');
const { isAuthenticated } = require('../middlewares/auth');

const router = express();

router.route('/address/new').post(isAuthenticated, createAddress);

module.exports = router;