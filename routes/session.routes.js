const express = require("express");
const {
  findAll,
  create,
  findByToken,
  deleteSession,
  check,
} = require("../controller/session.controller");
const router = express.Router();
router.route("/").get(findAll).post(create);
router.route("/:token").get(findByToken).delete(deleteSession);
router.route("/check/:token").get(check);
module.exports = router;
