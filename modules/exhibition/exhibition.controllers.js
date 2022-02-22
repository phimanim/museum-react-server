const Exhibition = require("./exhibition.model");
const mongoose = require("mongoose");

function isObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

async function getExhibitions(req, res) {
  try {
    const exhibitions = await Exhibition.find()
    .populate("museum")
    .lean();
    res.status(200).json(exhibitions).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function getExhibitionById(req, res) {
  try {
    const { exhibitionId } = req.params;
    if (!isObjectId(exhibitionId)) {
      res.status(400).json("Id not valid").end();
    }
    const exhibition = await Exhibition.findById(exhibitionId)
    .populate("museum")
    .lean();
    console.log("exhibition:", exhibition)
    res.status(200).json(exhibition).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function createExhibition(req, res) {
  try {
    const exhibition = await Exhibition.create(req.body);
    res.status(200).json(exhibition).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function updateExhibition(req, res) {
  try {
    const { exhibitionId } = req.params;
    if (!isObjectId(exhibitionId)) {
      res.status(400).json("Id not valid").end();
    }
    const exhibition = await Exhibition.findByIdAndUpdate(exhibitionId, req.body, {
      new: true,
    }).lean();

    res.status(200).json(exhibition).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function deleteExhibition(req, res) {
  try {
    const { exhibitionId } = req.params;
    if (!isObjectId(exhibitionId)) {
      res.status(400).json("Id not valid").end();
    }
    const exhibition = await Exhibition.findByIdAndDelete(exhibitionId).lean();
    res.status(200).json(exhibition).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

module.exports = {
  getExhibitionById,
  getExhibitions,
  updateExhibition,
  createExhibition,
  deleteExhibition,
};
