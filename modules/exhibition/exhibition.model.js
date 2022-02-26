const mongoose = require("mongoose");

const exhibitionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  artist: String,
  curator: String,
  begginingDate: Date,
  endDate: Date,
  imageUrl: String,
  museum:{ type: mongoose.Schema.Types.ObjectId, ref: "Museum" },
});

module.exports = mongoose.model("Exhibition", exhibitionSchema);
