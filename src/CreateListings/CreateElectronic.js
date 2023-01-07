import { useState } from "react";
import Axios from "../axiosBaseUrl";
import { useNavigate } from "react-router-dom";

const CreateElectronic = () => {
  const [electronicData, setElectronicData] = useState({
    title: "",
    brand: "",
    model: "",
    color: "",
    location: "",
    price: "",
    phone: "",
    description: "",
  });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setElectronicData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const addElectronicListing = (e) => {
    e.preventDefault();
    const template = {
      title: electronicData.title,
      brand: electronicData.brand,
      model: electronicData.model,
      color: electronicData.color,
      location: electronicData.location,
      price: electronicData.price,
      phone: electronicData.phone,
      description: electronicData.description,
    };

    Axios.post("/electronic/create", template);
    console.log(template);

    navigate("/electronics");
  };

  return (
    <div>
      <div className="cpContainer">
        <h1 className="post-header">List a Phone | Computer | Tablet</h1>

        <div id="form-group">
          <label for="title">Listing Title</label>
          <input
            className="form-control"
            type="text"
            name="title"
            required
            value={electronicData.title}
            onChange={onChangeHandler}
          />
          <label for="brand">Brand</label>
          <input
            className="form-control"
            type="text"
            name="brand"
            value={electronicData.brand}
            onChange={onChangeHandler}
          />
          <label for="brand">Model</label>
          <input
            className="form-control"
            type="text"
            name="model"
            value={electronicData.model}
            onChange={onChangeHandler}
          />
          <label for="brand">Color</label>
          <input
            className="form-control"
            type="text"
            name="color"
            value={electronicData.color}
            onChange={onChangeHandler}
          />
          <label for="location">Location</label>
          <input
            className="form-control"
            type="text"
            name="location"
            value={electronicData.location}
            onChange={onChangeHandler}
          />
          <label for="price">Price $</label>
          <input
            className="form-control"
            type="text"
            name="price"
            value={electronicData.price}
            onChange={onChangeHandler}
          />
          <label for="tel">Phone Number</label>
          <input
            className="form-control"
            type="number"
            name="phone"
            value={electronicData.phone}
            onChange={onChangeHandler}
          />

          <label for="">Description</label>
          <textarea
            className="form-control"
            name="description"
            id=""
            cols="30"
            rows="5"
            value={electronicData.description}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <button
          className="btn btn-primary post-btn"
          type="submit"
          onClick={addElectronicListing}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default CreateElectronic;
