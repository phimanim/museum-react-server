const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  exhibition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exhibition",
  },
  date: Date
});

module.exports = mongoose.model("Booking", bookingSchema);
