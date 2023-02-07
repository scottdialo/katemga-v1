const router = require("express").Router();
const ElectronicDB = require("../models/ElectronicDB");

router.route("/").get((req, res) => {
  ElectronicDB.find()
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const title = req.body.title;
  const brand = req.body.brand;
  const model = req.body.model;
  const color = req.body.color;
  const location = req.body.location;
  const price = req.body.price;
  const phone = req.body.phone;
  const description = req.body.description;
  const pictureUrl = req.body.pictureUrl;

  const electronicData = new ElectronicDB({
    title: title,
    brand: brand,
    model: model,
    color: color,
    location: location,
    price: price,
    phone: phone,
    description: description,
    pictureUrl: pictureUrl,
  });

  electronicData
    .save()
    .then((electronic) => res.json(electronic))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  ElectronicDB.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
