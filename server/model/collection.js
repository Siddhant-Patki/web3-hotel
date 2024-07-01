const mongoose = require("mongoose");
//const bcrypt = require("bcryptjs");
//mongoose.connect("mongodb://localhost:27017")

//const jwt = require("jsonwebtoken");
const collectionSchema = new mongoose.Schema({
  myCollection: {
    type: String,
    required: true,
  }
});

const nftcollection = mongoose.model("collection", collectionSchema);
module.exports = nftcollection;
