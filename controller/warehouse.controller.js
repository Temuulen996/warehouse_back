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
  let isProductExisted = false;
  const warehouse = await WareHouse.findById(req.body.to);
  let products = warehouse.products;
  products.map((el, i) => {
    if (el.product_id == req.body.product) {
      el.quantity = parseInt(el.quantity) + parseInt(req.body.quantity);
      isProductExisted = true;
    }
  });
  if (!isProductExisted) {
    products.push({
      product_id: mongoose.Types.ObjectId(req.body.product),
      quantity: parseInt(req.body.quantity),
    });
  }
  await WareHouse.findOneAndUpdate(
    { _id: req.body.to },
    { products: products }
  );

  res.status(200).send({ success: true, data: "sad" });
});
exports.deliverProduct = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const from = req.body.from;
  const to = req.body.to;
  const product_id = req.body.product;
  const quantity = req.body.quantity;
  const ProductFrom = await WareHouse.findById(from);
  const ProductTo = await WareHouse.findById(to);
  const productsFrom = ProductFrom.products;
  const productsTo = ProductTo.products;
  let isAvailable = false;
  let isInclude = false;
  productsFrom.map((el, i) => {
    if (el.product_id == product_id) {
      isAvailable = el.quantity >= quantity;
    }
  });
  console.log(isAvailable);
  if (isAvailable) {
    const warehouseFrom = await WareHouse.findById(from);
    let productsFrom = warehouseFrom.products;
    productsFrom.map((el, i) => {
      if (product_id == el.product_id) {
        el.quantity = parseInt(el.quantity) - parseInt(quantity);
      }
    });
    console.log(productsFrom);
    let isProductExisted = false;
    const warehouseTo = await WareHouse.findById(to);
    let productsTo = warehouseTo.products;
    productsTo.map((el, i) => {
      if (el.product_id == product_id) {
        el.quantity = parseInt(el.quantity) + parseInt(quantity);
        isProductExisted = true;
      }
    });
    if (!isProductExisted) {
      productsTo.push({
        product_id: mongoose.Types.ObjectId(product_id),
        quantity: parseInt(quantity),
      });
    }
    await WareHouse.findOneAndUpdate({ _id: from }, { products: productsFrom });
    await WareHouse.findOneAndUpdate({ _id: to }, { products: productsTo });
  }

  res.status(200).send({
    success: true,
    state: "The product which u want to deliver is not existed.",
    isAvailable: isAvailable,
    isInclude: isInclude,
  });
});
