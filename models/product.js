const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  name: String,
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
