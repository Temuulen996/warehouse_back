const asyncHandler = require("../middleware/asyncHandler");
const Session = require("../models/session");
const User = require("../models/user");
var rand = function () {
  return Math.random().toString(36).substr(2); // remove `0.`
};

var Token = function () {
  return rand() + rand(); // to make it longer
};
exports.findAll = asyncHandler(async (req, res, next) => {
  const data = await Session.find();
  res.status(200).send({ success: true, data: data });
});
exports.findByToken = asyncHandler(async (req, res, next) => {
  const token = req.params.token;
  const data = await Session.find({ token: token });
  res.status(200).send({ success: true, data: data });
});
exports.findByUserID = asyncHandler(async (req, res, next) => {
  const userID = req.params.id;
  const data = await Session.find({ user_id: userID });
  res.status(200).send({ success: true, data: data });
});

exports.create = asyncHandler(async (req, res, next) => {
  const state = false;
  const user = req.body;
  const check = await User.find({
    email: user.email,
    password: user.password,
  });
  console.log(check);
  // const userID = req.body.userID;
  if (check.length === 0) {
    res.status(200).send({ success: false });
  } else {
    console.log(check[0]);
    const token = Token();
    const data = await Session.create({ token: token, user_id: check[0] });
    console.log(data);
    res.status(200).send({ success: true, data: data });
  }
});
