const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  picture: { type: String, require: true },

  email: { type: String, required: true },
  password: String,
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
