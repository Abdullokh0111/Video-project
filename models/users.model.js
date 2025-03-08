const mongoose = require("mongoose");

let userScheme = new mongoose.Schema({
  firstName: { type: String, required: true, maxLength: 20, minLength: 2 },
  lastName: { type: String, required: true, maxLength: 20, minLength: 2 },
  age: { type: Number, required: true, max: 100, min: 0 },
  email: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 15,
    unique: true,
  },
  job: { type: String },
  gender: { type: String, enum: [male, female] },
  phone: { type: String, len: 13 },
});

let User = mongoose.model("videos", userScheme);

module.exports = User;
