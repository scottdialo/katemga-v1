import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Axios from "../axiosBaseUrl";
import axios from "axios";

//mongoDb setup
const CreateRealEstatePost = () => {
  const navigate = useNavigate();

  const [realEstateData, setRealEstateData] = useState({
    title: "",
    location: "",
    price: "",
    phone: "",
    description: "",
  });

  const [pictures, setPictures] = useState([]);

  const handleImageUpload = (event) => {
    let images = [];

    for (const pictures of event.target.files) {
      images.push(pictures);
    }

    setPictures(images);
    //console.log(images);
  };
  // console.log(pictures);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRealEstateData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  //sending data to DB
  const addRealEstateListing = (e) => {
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
        console.log(data);
      });
    });

    axios.all(imageUploads).then(() => {
      const template = {
        title: realEstateData.title,
        location: realEstateData.location,
        price: realEstateData.price,
        description: realEstateData.description,
        pictureUrl: fileUrls,
      };

      console.log(template);
      Axios.post("/real-estate/create", template).then((response) =>
        console.log(response.data)
      );
    });

    navigate("/real-estate");
  };

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1 className="post-header">List a House | Land</h1>

        <div className="inputGp">
          <label>Title</label>
          <input
            value={realEstateData.title}
            autoFocus
            name="title"
            type="text"
            onChange={handleChange}
          />
        </div>

        <div className="inputGp">
          <label>Location</label>
          <input
            value={realEstateData.location}
            name="location"
            type="text"
            onChange={handleChange}
          />
        </div>

        <div className="inputGp">
          <label>Price</label>
          <input
            value={realEstateData.price}
            name="price"
            type="number"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>upload multiple images</label>
          <input
            name="pictureUrl"
            type="file"
            multiple
            onChange={handleImageUpload}
            accept="image/*"
          />
        </div>

        <div className="inputGp">
          <label>Phone Number</label>
          <input
            value={realEstateData.phone}
            name="phone"
            type="number"
            onChange={handleChange}
          />
        </div>

        <div className="inputGp">
          <label>Description </label>
          <textarea
            value={realEstateData.description}
            name="description"
            type="text"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="btn" type="submit" onClick={addRealEstateListing}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default CreateRealEstatePost;
