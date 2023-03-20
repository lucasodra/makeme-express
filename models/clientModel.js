const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    supportPin: {
        type: Number
    },
    roleOf: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.export = mongoose.model(Client, clientSchema);