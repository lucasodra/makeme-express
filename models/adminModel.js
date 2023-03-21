const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    role : {
        type: String,
        default: "Specialist"
    },
    isSuper: {
        type: Boolean,
        default: 0
    }
})

module.exports = mongoose.model("Admin", adminSchema);