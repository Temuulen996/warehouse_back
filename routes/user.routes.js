const express = require("express");
const { findAll, findById, create } = require("../controller/user.controller");
const {
  addToWishlist,
  removeFromWishlist,
} = require("../controller/user.controller");

const router = express.Router();
router.route("/").get(findAll).post(create);
router.route("/:id").get(findById);
router.route("/wishlist/add/:id").put(addToWishlist);
router.route("/wishlist/remove/:id").put(removeFromWishlist);
module.exports = router;
