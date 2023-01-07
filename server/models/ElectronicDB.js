const mongoose = require("mongoose");

const ElectronicSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  color: {
    type: String,
  },
  location: {
    type: String,
  },
  price: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const ElectronicDB = mongoose.model("Electronic", ElectronicSchema);
module.exports = ElectronicDB;
