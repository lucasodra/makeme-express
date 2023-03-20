const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter email"],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        minlength: [6, "Password must be of minimum 6 characters"],
        select: false
    },
    firstname: {
        type: String,
        required: [true, "Please enter first name"]
    },
    lastname: {
        type: String,
        required: [true, "Please enter last name"]
    },
    dateJoin: {
        type: Date,
        default: Date.now
    },
    isMaker: {
        type: Boolean,
        required: true
    },
    isClient: {
        type: Boolean,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("User", userSchema);