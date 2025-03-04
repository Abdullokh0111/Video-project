const { default: mongoose } = require("mongoose");

let videoSchema = new mongoose.Schema({
  title: { type: String },
  duration: { type: Number },
  category: { type: String },
  author: { type: String },
});
let vidoe = mongoose.model("videos", videoSchema);

module.exports = vidoe;
