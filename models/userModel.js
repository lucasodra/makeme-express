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
    mobile: {
        type: String,
        required: [true, "Please enter contact number"],
        unique: [true, "Contact number was previously registered"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        minlength: [6, "Password must be of minimum 6 characters"],
        select: false,
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
    client:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    maker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Maker'
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
    resetPasswordToken: String,
    resetPasswordExpiry: Date
});

userSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

userSchema.methods.generateToken = function() {
    return jwt.sign( {id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
}

module.exports = mongoose.model("User", userSchema);