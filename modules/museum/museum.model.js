const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const museumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  phone: Number,
  exhibition: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exhibition" }],
  imageUrl: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Museum", museumSchema);
