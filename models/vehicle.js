const mongoose = require("mongoose");
const VehicleSchema = mongoose.Schema({ number: String });
const Vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports = Vehicle;
