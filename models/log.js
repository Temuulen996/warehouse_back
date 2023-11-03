const mongoose = require("mongoose");

const LogSchema = mongoose.Schema({});

const Log = mongoose.model("Log", LogSchema);
module.exports = Log;
