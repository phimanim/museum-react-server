const Like = require("./like.model");
const mongoose = require("mongoose");
const User = require("../auth/user.model");


function isObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

async function getLikes(req, res) {
  try {
    const userId = req.session.user._id;
    const user = await User.findById(userId);
    const likes = await Like.find({ "user": {$eq: user._id}}).populate("exhibition").lean();
    res.status(200).json(likes).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function getLikeById(req, res) {
  try {
    const { likeId } = req.params;
    if (!isObjectId(likeId)) {
      res.status(400).json("Id not valid").end();
    }
    const like = await Like.findById(likeId)
      .populate("exhibition")
      .lean();
    res.status(200).json(like).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function createLike(req, res) {
  try {
    const like = await Like.create({
      ...req.body,
      user: req.session.user._id,
    });
    res.status(200).json(like).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function updateLike(req, res) {
  try {
    const { likeId } = req.params;
    if (!isObjectId(likeId)) {
      res.status(400).json("Id not valid").end();
    }
    const like = await Like.findByIdAndUpdate(likeId, req.body, {
      new: true,
    }).lean();

    res.status(200).json(like).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function deleteLike(req, res) {
  try {
    const { likeId } = req.params;
    if (!isObjectId(likeId)) {
      res.status(400).json("Id not valid").end();
    }
    const like = await Like.findByIdAndDelete(likeId).lean();
    res.status(200).json(like).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

module.exports = {
  getLikeById,
  getLikes,
  updateLike,
  createLike,
  deleteLike,
};
