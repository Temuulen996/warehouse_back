const mongoose = require("mongoose");

const LogSchema = mongoose.Schema(
  {
    from: mongoose.Schema.ObjectId,
    to: mongoose.Schema.ObjectId,
    product: mongoose.Schema.ObjectId,
    quantity: Number,
    vehicle: mongoose.Schema.ObjectId,
  },
  { timestamps: true }
);

const Log = mongoose.model("Log", LogSchema);
module.exports = Log;
