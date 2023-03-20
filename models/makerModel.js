const mongoose = require('mongoose');

const makerSchema = new mongoose.Schema({
    description: {
        type: String
    },
    rating: {
        type: Number
    },
    totalOrder: {
        type: Number
    },
    roleOf: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})

module.exports = mongoose.model(Maker, makerSchema);