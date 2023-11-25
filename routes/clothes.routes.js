const express = require("express");
const { protect } = require("../middleware/protect");
const {
  findAll,
  createClothes,
  findById,
} = require("../controller/clothes.controller");

const router = express.Router();
router.route("/").get(protect, findAll).post(protect, createClothes);
router.route("/:id").get(findById);

module.exports = router;
