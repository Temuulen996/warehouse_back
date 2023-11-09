const express = require("express");
const {
  findAll,
  findByID,
  deleteByID,
  create,
} = require("../controller/log.controller");
const router = express.Router();

router.route("/").get(findAll).post(create);
router.route("/:id").get(findByID).delete(deleteByID);
module.exports = router;
