const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  exhibition: {
    type: mongoose.Schema.Types.ObjectId, ref: "Exhibition",
    required: true
  },
  date: Date,
  hour: Number
});

module.exports = mongoose.model("Booking", bookingSchema);
