const Booking = require("./booking.model");
const mongoose = require("mongoose");
const User = require("../auth/user.model");


function isObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

async function getBookings(req, res) {
  try {
    const userId = req.session.user._id;
    const user = await User.findById(userId);
    const bookings = await Booking.find({ "user": {$eq: user._id}}).populate("exhibition").lean();
    res.status(200).json(bookings).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function getBookingById(req, res) {
  try {
    const { bookingId } = req.params;
    if (!isObjectId(bookingId)) {
      res.status(400).json("Id not valid").end();
    }
    const booking = await Booking.findById(bookingId)
      .populate("exhibition")
      .lean();
    res.status(200).json(booking).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function createBooking(req, res) {
  try {
    const booking = await Booking.create({
      ...req.body,
      user: req.session.user._id,
    });
    res.status(200).json(booking).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function updateBooking(req, res) {
  try {
    const { bookingId } = req.params;
    if (!isObjectId(bookingId)) {
      res.status(400).json("Id not valid").end();
    }
    const booking = await Booking.findByIdAndUpdate(bookingId, req.body, {
      new: true,
    }).lean();

    res.status(200).json(booking).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function deleteBooking(req, res) {
  try {
    const { bookingId } = req.params;
    if (!isObjectId(bookingId)) {
      res.status(400).json("Id not valid").end();
    }
    const booking = await Booking.findByIdAndDelete(bookingId).lean();
    res.status(200).json(booking).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

module.exports = {
  getBookingById,
  getBookings,
  updateBooking,
  createBooking,
  deleteBooking,
};
