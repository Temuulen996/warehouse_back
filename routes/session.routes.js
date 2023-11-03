const express = require("express");
const {
  findAll,
  create,
  findByToken,
} = require("../controller/session.controller");
const router = express.Router();
router.route("/").get(findAll).post(create);
router.route("/:token").get(findByToken);
module.exports = router;
