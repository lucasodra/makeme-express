const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    supportPin: {
        type: Number
    }
});

module.exports = mongoose.model("Client", clientSchema);