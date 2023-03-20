const express = require('express');
const { signupUser } = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/auth');

const router = express();

router.route("/signup").post( signupUser );

module.exports = router;