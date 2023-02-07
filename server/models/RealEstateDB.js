const mongoose = require("mongoose");

const RealEstateSchema = new mongoose.Schema({
  title: {
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
  pictureUrl: {
    type: Array,
  },
});

const RealEstateDB = mongoose.model("RealEstateListing", RealEstateSchema);
module.exports = RealEstateDB;
