const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    postal: {
        type: String,
        required: [true, "Please enter postal code"]
    },
    line1: {
        type: String,
        required: [true, "Please enter an address line"]
    },
    line2: {
        type: String
    },
    country : {
        type: String,
        required: [true, "Please enter country"]
    },
    name: {
        type: String,
        required: [true, "Please provide a nickcname"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Address', addressSchema);