const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      required: false,
    },
    otp: {
      type: String,
      required: false,
    },
    otpVerified: {
      type: Boolean,
      default: false,
    },
    otpExpiry: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
