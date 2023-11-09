const express = require("express");
const app = express();
var path = require("path");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
var cors = require("cors");
app.use(cors());
const connectDb = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

var bodyParser = require("body-parser");

//PARSER
app.use(express.json({ limit: "500mb" }));
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
//Parser

//db connect
connectDb();
//db connect

//Routes
const ProductRoute = require("./routes/product.routes");
const UserRoute = require("./routes/user.routes");
const SessionRoute = require("./routes/session.routes");
const LogRoute = require("./routes/log.routes");
const WareHouseRoute = require("./routes/warehouse.routes");
const VehicleRoute = require("./routes/Vehicle.routes");
//Routes
//middleware
app.use("/api/product", ProductRoute);
app.use("/api/user", UserRoute);
app.use("/api/session", SessionRoute);
app.use("/api/log", LogRoute);
app.use("/api/warehouse", WareHouseRoute);
app.use("/api/vehicle", VehicleRoute);
//middleware

app.get("/", async (req, res, next) => {
  res.status(200).send({ response: "server-тэй амжилттай холбогдлоо." });
});

//errorHandler
app.use(errorHandler);
//errorHandler
const server = app.listen(process.env.PORT, () => {
  console.log(`server ${process.env.PORT} port дээр аслаа`);
});
process.on("unhandledRejection", (err, promise) => {
  console.log(`алдаа гарлаа : ${err.message}`.red.underline.red.bold);
  server.close(() => {
    process.exit(1);
  });
});
