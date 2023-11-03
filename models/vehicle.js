const mongoose = require("mongoose");
const VehicleSchema = mongoose.Schema({});
const Vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports = Vehicle;
