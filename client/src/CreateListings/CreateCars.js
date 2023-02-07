import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../axiosBaseUrl";

const CreateCars = () => {
  const [carListingData, setCarListingData] = useState({
    title: "",
    brand: "",
    model: "",
    mileage: "",
    year: "",
    color: "",
    location: "",
    price: "",
    phone: "",
    description: "",
  });
  const navigate = useNavigate();

  const onchangeHandler = (e) => {
    const { name, value } = e.target;

    setCarListingData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const addCarListing = (e) => {
    e.preventDefault();
    const template = {
      title: carListingData.title,
      brand: carListingData.brand,
      model: carListingData.model,
      mileage: carListingData.mileage,
      year: carListingData.year,
      color: carListingData.color,
      location: carListingData.location,
      price: carListingData.price,
      phone: carListingData.phone,
      description: carListingData.description,
      photo1: carListingData.photo1,
    };
    Axios.post("/cars/create", template);

    console.log(template);
    console.log("new listing added to DB");
    navigate("/cars-trucks");
  };
  return (
    <div className="cpContainer">
      <h1 className="post-header">List a Car or Truck</h1>

      <div id="form-group">
        <label for="title">Posting Title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          autoFocus
          value={carListingData.title}
          onChange={onchangeHandler}
          required={true}
        />
        <label for="brand">Brand</label>
        <input
          className="form-control"
          type="text"
          name="brand"
          value={carListingData.brand}
          onChange={onchangeHandler}
        />
        <label for="model"> Model</label>
        <input
          className="form-control"
          type="text"
          name="model"
          value={carListingData.model}
          onChange={onchangeHandler}
        />
        <label for="mileage">Mileage</label>
        <input
          className="form-control"
          type="number"
          name="mileage"
          value={carListingData.mileage}
          onChange={onchangeHandler}
        />
        <label for="year">Year</label>
        <input
          className="form-control"
          type="number"
          name="year"
          value={carListingData.year}
          onChange={onchangeHandler}
        />
        <label for="color">Color</label>
        <input
          className="form-control"
          type="text"
          name="color"
          value={carListingData.color}
          onChange={onchangeHandler}
        />
        <label for="location">Location</label>
        <input
          className="form-control"
          type="text"
          name="location"
          value={carListingData.location}
          onChange={onchangeHandler}
        />
        <label for="price">Price $</label>
        <input
          className="form-control"
          type="text"
          name="price"
          value={carListingData.price}
          onChange={onchangeHandler}
        />
        <label for="phone">Phone Number</label>
        <input
          className="form-control"
          type="number"
          name="phone"
          value={carListingData.phone}
          onChange={onchangeHandler}
        />
        <label for="image">Upload Photos</label>
        <input
          type="file"
          name="photo1"
          multiple
          value={carListingData.photo1}
          onChange={onchangeHandler}
        />

        <label for="">Description</label>
        <textarea
          name="description"
          type="text"
          rows="10"
          onChange={onchangeHandler}
        ></textarea>
      </div>
      <button
        className="btn btn-primary post-btn"
        type="submit"
        onClick={addCarListing}
      >
        Publish
      </button>
    </div>
  );
};

export default CreateCars;
