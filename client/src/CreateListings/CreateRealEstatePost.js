import { useState } from "react";
import app from "../firebase-config";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Axios from "../axiosBaseUrl";

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
  // const [file, setFile] = useState(null);

  // testing multiple image upload

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

  // testing multiple image upload ends here

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRealEstateData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  //sending data to DB
  const addRealEstateListing = (e) => {
    e.preventDefault();

    const fileName = new Date().getTime() + toString(pictures.name);
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, pictures);
    // console.log(JSON.stringify(fileName));

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            // console.log("Upload is paused");
            break;
          case "running":
            // console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const template = {
            title: realEstateData.title,
            location: realEstateData.location,
            price: realEstateData.price,
            description: realEstateData.description,
            pictureUrl: downloadURL,
          };

          console.log(template);
          Axios.post("/real-estate/create", template).then((response) =>
            console.log(response.data)
          );
          console.log(JSON.stringify(template.pictureUrl));

          console.log("image url is at " + downloadURL);
        });
      }
    );

    navigate("/real-estate");
  };

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1 class="post-header">List a House | Land</h1>

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

        <label for="image">Upload Photos</label>
        <input
          type="file"
          id="file"
          onChange={(e) => setPictures(e.target.files[0])}
        />

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

        <button class="btn" type="submit" onClick={addRealEstateListing}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default CreateRealEstatePost;
