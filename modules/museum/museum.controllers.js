const Museum = require("./museum.model");
const mongoose = require("mongoose");

function isObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

async function getMuseums(req, res) {
  try {
    const museums = await Museum.find()
    .populate("exhibition")
    .lean();
    res.status(200).json(museums).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function getMuseumById(req, res) {
  try {
    const { museumId } = req.params;
    if (!isObjectId(museumId)) {
      res.status(400).json("Id not valid").end();
    }
    const museum = await Museum.findById(museumId)
    .populate("exhibition")
    .lean();
    res.status(200).json(museum).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function createMuseum(req, res) {
  try {
    const museum = await Museum.create(req.body);
    res.status(200).json(museum).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function updateMuseum(req, res) {
  try {
    const { museumId } = req.params;
    if (!isObjectId(museumId)) {
      res.status(400).json("Id not valid").end();
    }
    const museum = await Museum.findByIdAndUpdate(museumId, req.body, {
      new: true,
    }).lean();

    res.status(200).json(museum).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function deleteMuseum(req, res) {
  try {
    const { museumId } = req.params;
    if (!isObjectId(museumId)) {
      res.status(400).json("Id not valid").end();
    }
    const museum = await Museum.findByIdAndDelete(museumId).lean();
    res.status(200).json(museum).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

module.exports = {
  getMuseumById,
  getMuseums,
  updateMuseum,
  createMuseum,
  deleteMuseum,
};
