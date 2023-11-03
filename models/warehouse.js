const mongoose = require("mongoose");
const WareHouseSchema = mongoose.Schema({
  name: { type: String, required: true },
  products: [{ product_id: mongoose.Schema.ObjectId, quantity: Number }],
});
const WareHouse = mongoose.model("WareHouse", WareHouseSchema);
module.exports = WareHouse;
