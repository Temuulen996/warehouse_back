const asyncHandler = require("../middleware/asyncHandler");
const WareHouse = require("../models/warehouse");
const mongoose = require("mongoose");
exports.addWareHouse = asyncHandler(async (req, res, next) => {
  const data = req.body;
  await WareHouse.create(data);
  res.status(200).send({ success: true });
});
exports.findAll = asyncHandler(async (req, res, next) => {
  const data = await WareHouse.find();
  res.status(200).send({ success: true, data: data });
});
exports.findById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  console.log(id);

  const data = await WareHouse.findById(id);
  console.log(data);
  res.status(200).send({ success: true, data: data });
});
exports.addProductByID = asyncHandler(async (req, res, next) => {
  const productId = req.body.productID;
  const productQuantity = req.body.quantity;
});
exports.deliverProduct = asyncHandler(async (req, res, next) => {
  const from = req.body.from;
  const to = req.body.to;
  const product_id = req.body.product_id;
  const quantity = req.body.quantity;

  const ProductFrom = await WareHouse.findById(from);
  const ProductTo = await WareHouse.findById(to);
  const productsFrom = ProductFrom.products;
  const productsTo = ProductTo.products;
  let isAvailable = false;
  let isInclude = false;
  productsFrom.map((el, i) => {
    console.log(el.product_id == product_id);
    if (el.product_id == product_id) {
      isAvailable = el.quantity >= quantity;
    }
  });
  if (isAvailable) {
    productsTo.map((el, i) => {
      if (el.product_id == product_id) {
        isInclude = true;
      }
    });
    if (isInclude == false) {
      //   ProductTo.a;
    }
  }

  res.status(200).send({
    success: true,
    data: productsTo,
    isAvailable: isAvailable,
    isInclude: isInclude,
  });
});
