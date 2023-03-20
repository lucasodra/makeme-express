const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    role : {
        type: String,
        default: "Specialist"
    },
    isSuper: {
        type: Boolean,
        default: 0
    },
    roleOf : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.export = mongoose.model(Admin, adminSchema);