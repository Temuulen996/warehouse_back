const express = require("express");
const { create, findAll } = require("../controller/vehicle.controller");
const router = express.Router();
router.route("/").get(findAll).post(create);
module.exports = router;
