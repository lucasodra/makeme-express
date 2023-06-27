const express = require('express');
const { signupUser, signinUser } = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/auth');

const router = express();

router.route("/signup").post( signupUser );
router.route("/signin").post( signinUser );

module.exports = router;