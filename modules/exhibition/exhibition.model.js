const mongoose = require("mongoose");

const exhibitionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  artist: [String],
  curator: [String],
  begginingDate: Date,
  endDate: Date,
  imageUrl: String,
});

module.exports = mongoose.model("Exhibition", exhibitionSchema);
