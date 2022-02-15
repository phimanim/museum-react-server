const mongoose = require("mongoose");

const museumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  coordinates: Number,
  phone: Number,
  exhibitions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exhibition" }],
  imageUrl: String,
});

module.exports = mongoose.model("Museum", museumSchema);
