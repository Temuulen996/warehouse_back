const express = require("express");
const {
  addWareHouse,
  findAll,
  findById,
  addProductByID,
  deliverProduct,
} = require("../controller/warehouse.controller");
const router = express.Router();
router.route("/").post(addWareHouse).get(findAll).put(deliverProduct);
router.route("/:id").get(findById);
router.route("/add/:id").post(addProductByID);

module.exports = router;
