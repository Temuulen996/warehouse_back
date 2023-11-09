const asyncHandler = require("../middleware/asyncHandler");
const Log = require("../models/log");
exports.create = asyncHandler(async (req, res, next) => {
  const newLog = req.body;
  await Log.create(newLog);
  res.status(200).send({ success: true });
});
exports.findAll = asyncHandler(async (req, res, next) => {
  const data = await Log.find();
  res.status(200).send({ success: true, data: data });
});
exports.findByID = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = await Log.findById(id);
  res.status(200).send({ success: true, data: data });
});
exports.deleteByID = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  await Log.findByIdAndDelete(id);
  res.status(200).send({ success: true });
});
