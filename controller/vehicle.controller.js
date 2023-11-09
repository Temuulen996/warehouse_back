const Vehicle = require("../models/vehicle");
const asyncHandler = require("../middleware/asyncHandler");
exports.create = asyncHandler(async (req, res, next) => {
  const newUser = req.body;
  await Vehicle.create(newUser);
  res.status(200).send({ success: true });
});
exports.findAll = asyncHandler(async (req, res, next) => {
  const data = await Vehicle.find();
  res.status(200).send({ success: true, data: data });
});
