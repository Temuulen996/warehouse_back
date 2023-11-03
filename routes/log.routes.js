const express = require("express");
const {
  findAll,
  findByID,
  deleteByID,
} = require("../controller/log.controller");
const router = express.Router();

router.route("/").get(findAll);
router.route("/:id").get(findByID).delete(deleteByID);
module.exports = router;
