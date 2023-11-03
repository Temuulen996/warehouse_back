const express = require("express");
const {
  findAll,
  createProduct,
  findById,
  findByOwnerId,
} = require("../controller/product.controller");

const router = express.Router();
router.route("/").get(findAll).post(createProduct);
router.route("/:id").get(findById);

module.exports = router;
