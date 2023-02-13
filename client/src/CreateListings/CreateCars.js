import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../axiosBaseUrl";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader"


const CreateCars = () => {
  const navigate = useNavigate();



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

  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    let images = [];

    for (const pictures of event.target.files) {
      images.push(pictures);
    }

    setPictures(images);
    // console.log(images);
  };

  const onchangeHandler = (e) => {
    const { name, value } = e.target;

    setCarListingData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  //sending data to database
  const addCarListing = (e) => {

    setLoading(true);
    const imgUploadUrl =
      "https://api.cloudinary.com/v1_1/dt6gdt87q/image/upload";
    e.preventDefault();

    const fileUrls = [];

    const formData = new FormData();

    const imageUploads = pictures.map((picture) => {
      formData.append("file", picture);
      formData.append("upload_preset", "rc88il7j");

      return axios.post(imgUploadUrl, formData).then((response) => {
        const data = response.data;
        fileUrls.push(data.secure_url); // You should store this URL for future references in your app
      });
    });

    axios.all(imageUploads).then(() => {
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
        pictureUrl: fileUrls,
      };

      Axios.post("/cars/create", template).then((response) => {
        setLoading(false);
        navigate("/cars-trucks")
    });
    });

    console.log("new listing added to DB");
  };

  return (

    <div className="cpContainer">
      <h1 className="post-header">List a Car or Truck</h1>

      <div id="form-group">
        <label htmlFor="title">Posting Title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          autoFocus
          value={carListingData.title}
          onChange={onchangeHandler}
        />
        <label htmlFor="brand">Brand</label>
        <input
          className="form-control"
          type="text"
          name="brand"
          value={carListingData.brand}
          onChange={onchangeHandler}
        />
        <label htmlFor="model"> Model</label>
        <input
          className="form-control"
          type="text"
          name="model"
          value={carListingData.model}
          onChange={onchangeHandler}
        />
        <label htmlFor="mileage">Mileage</label>
        <input
          className="form-control"
          type="number"
          name="mileage"
          value={carListingData.mileage}
          onChange={onchangeHandler}
        />
        <label htmlFor="year">Year</label>
        <input
          className="form-control"
          type="number"
          name="year"
          value={carListingData.year}
          onChange={onchangeHandler}
        />
        <label htmlFor="color">Color</label>
        <input
          className="form-control"
          type="text"
          name="color"
          value={carListingData.color}
          onChange={onchangeHandler}
        />
        <label htmlFor="location">Location</label>
        <input
          className="form-control"
          type="text"
          name="location"
          value={carListingData.location}
          onChange={onchangeHandler}
        />
        <label htmlFor="price">Price $</label>
        <input
          className="form-control"
          type="text"
          name="price"
          value={carListingData.price}
          onChange={onchangeHandler}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          className="form-control"
          type="number"
          name="phone"
          value={carListingData.phone}
          onChange={onchangeHandler}
        />
        <label htmlFor="image">Upload Photos</label>
        <input
          type="file"
          name="pictureUrl"
          multiple
          onChange={handleImageUpload}
          accept="images/*"
        />

        <label htmlFor="">Description</label>
        <textarea
          name="description"
          type="text"
          rows="10"
          onChange={onchangeHandler}
        ></textarea>
      </div>
      <button
        className="btn btn-primary post-btn btn-lg"
        type="submit"
        onClick={addCarListing}
      >
       { loading ?  <BeatLoader color="white" /> : "Publish" }
      </button>
    </div>
    
  );
};

export default CreateCars;
