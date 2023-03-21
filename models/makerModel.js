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
    }
})

module.exports = mongoose.model("Maker", makerSchema);