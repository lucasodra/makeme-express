const User = require('../models/userModel');
const Client = require('../models/clientModel');
const catchAsync = require('../middlewares/catchAsync');
const sendCookie = require('../utils/sendCookie');
const ErrorHandler = require('../utils/errorHandler');
const crypto = require('crypto');

exports.signupUser = catchAsync(async (req, res, next) => {

    const { firstname, lastname, email, mobile, password, isMaker, isClient, isAdmin} = req.body;

    const user = await User.findOne({
        $or: [{ email }, { mobile }]
    });

    if (user) {
        if (user.mobile == mobile) {
            return next(new ErrorHandler("Mobile Number already exists", 401));
        }

        return next(new ErrorHandler("Email already exists", 401));
    }

    const supportPin = Math.floor(Math.random() * (process.env.SUPPORT_PIN_MAX - process.env.SUPPORT_PIN_MIN) + process.env.SUPPORT_PIN_MIN);
    
    const client = await Client.create({
        supportPin
    })

    const newUser = await User.create({
        email,
        mobile,
        password,
        firstname,
        lastname,
        isMaker,
        isClient,
        isAdmin,
        client
    })

    sendCookie(newUser, 201, res);
});