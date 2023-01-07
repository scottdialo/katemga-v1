const router = require("express").Router();
const RealEstateDB = require("../models/RealEstateDB.js");

router.route("/").get((req, res) => {
  RealEstateDB.find()
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const title = req.body.title;
  const location = req.body.location;
  const price = req.body.price;
  const phone = req.body.phone;
  // const imgUrl = req.body.imgUrl;
  const pictureUrl = req.body.pictureUrl;
  const description = req.body.description;

  const realEstateData = new RealEstateDB({
    title: title,
    location: location,
    price: price,
    phone: phone,
    // imgUrl: imgUrl,
    pictureUrl: pictureUrl,
    description: description,
  });

  realEstateData
    .save()
    .then((realEstate) => res.json(realEstate))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  RealEstateDB.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
