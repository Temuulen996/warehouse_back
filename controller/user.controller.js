const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/user");
const mongoose = require("mongoose");
exports.findAll = asyncHandler(async (req, res, next) => {
  const data = await User.find();
  res.status(200).send({ success: true, data: data });
});
exports.findById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = await User.findById(id);
  res.status(200).send({ success: true, data: data });
});
exports.create = asyncHandler(async (req, res, next) => {
  const newUser = req.body;
  await User.create(newUser);
  res.status(200).send({ success: true });
});
