const mongoose = require("mongoose");

const CarsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  mileage: {
    type: Number,
  },

  year: {
    type: Number,
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
  photo1: {
    type: String
  }
});

const CarsDB = mongoose.model("Car", CarsSchema);
module.exports = CarsDB;
