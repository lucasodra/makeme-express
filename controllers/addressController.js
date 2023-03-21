const Address = require('../models/addressModel');
const catchAsync = require('../middlewares/catchAsync');
const ErrorHandler = require('../utils/errorHandler');

exports.createAddress = catchAsync(async (req, res, next) => {
    // const { postal, line1, line2, country, name } = req.body;

    const addressData = {
        postal: req.body.postal,
        line1: req.body.line_1,
        line2: req.body.line_2,
        country: req.body.country,
        name: req.body.name,
        user: req.user._id
    }

    const newAddress = await Address.create(addressData);

    res.status(201).json({
        success: true,
        address: newAddress
    });

});