const router = require("express").Router();
const CarsDB = require("../models/CarsDB.js");

router.route("/").get((req, res) => {
  CarsDB.find()
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const title = req.body.title;
  const brand = req.body.brand;
  const model = req.body.model;
  const mileage = req.body.mileage;
  const year = req.body.year;
  const color = req.body.color;
  const location = req.body.location;
  const price = req.body.price;
  const phone = req.body.phone;
  const description = req.body.description;
  const photo1 = req.body.photo1;


  const carData = new CarsDB({
    title: title,
    brand: brand,
    model: model,
    mileage: mileage,
    year: year,
    color: color,
    location: location,
    price: price,
    phone: phone,
    description: description,
    photo1:photo1,
  });

  carData
    .save()
    .then((car) => res.json(car))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/:id").get ((req, res) => {


  CarsDB.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json("Error: " + err));


})


module.exports = router;
