import { useState } from "react";
import Axios from "../axiosBaseUrl";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const CreateElectronic = () => {
  const navigate = useNavigate();

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

  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    let images = [];

    for (const pictures of event.target.files) {
      images.push(pictures);
    }

    setPictures(images);
    //console.log(images);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setElectronicData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const addElectronicListing = (e) => {
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
        title: electronicData.title,
        brand: electronicData.brand,
        model: electronicData.model,
        color: electronicData.color,
        location: electronicData.location,
        price: electronicData.price,
        phone: electronicData.phone,
        description: electronicData.description,
        pictureUrl: fileUrls,
      };

      Axios.post("/electronic/create", template).then((response) => {
        setLoading(false);
        navigate("/electronics");
      });
    });
  };
  return (
    <div>
      <div className="cpContainer">
        <h1 className="post-header">List a Phone | Computer | Tablet</h1>

        <div id="form-group">
          <label htmlFor="title">Listing Title</label>
          <input
            className="form-control"
            type="text"
            name="title"
            required
            value={electronicData.title}
            onChange={onChangeHandler}
          />
          <label htmlFor="brand">Brand</label>
          <input
            className="form-control"
            type="text"
            name="brand"
            value={electronicData.brand}
            onChange={onChangeHandler}
          />
          <label htmlFor="brand">Model</label>
          <input
            className="form-control"
            type="text"
            name="model"
            value={electronicData.model}
            onChange={onChangeHandler}
          />
          <label htmlFor="brand">Color</label>
          <input
            className="form-control"
            type="text"
            name="color"
            value={electronicData.color}
            onChange={onChangeHandler}
          />
          <label htmlFor="location">Location</label>
          <input
            className="form-control"
            type="text"
            name="location"
            value={electronicData.location}
            onChange={onChangeHandler}
          />
          <label htmlFor="price">Price $</label>
          <input
            className="form-control"
            type="text"
            name="price"
            value={electronicData.price}
            onChange={onChangeHandler}
          />
          <label htmlFor="tel">Phone Number</label>
          <input
            className="form-control"
            type="number"
            name="phone"
            value={electronicData.phone}
            onChange={onChangeHandler}
          />
          <div>
            <label>Upload Photos</label>
            <input
              name="pictureUrl"
              type="file"
              multiple
              onChange={handleImageUpload}
              accept="image/*"
            />
          </div>
          <label htmlFor="">Description</label>
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
          className="btn btn-primary post-btn btn-lg"
          type="submit"
          onClick={addElectronicListing}
        >
          {loading ? <BeatLoader color="white" /> : "Publish"}
        </button>
      </div>
    </div>
  );
};

export default CreateElectronic;
