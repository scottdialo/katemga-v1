require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URI);

const connection = mongoose.connection;

const realEstateRouter = require("./routes/realEstate");
const carsRouter = require("./routes/cars");
const electronicRouter = require("./routes/electronic");

app.use("/real-estate", realEstateRouter);
app.use("/cars", carsRouter);
app.use("/electronic", electronicRouter);

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
