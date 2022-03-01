const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  exhibition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exhibition",
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Like", likeSchema);
