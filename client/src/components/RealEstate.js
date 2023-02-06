import React, { useState, useEffect } from "react";
import Card from "./Card";
import "react-spinner-animated/dist/index.css";
import Axios from "../axiosBaseUrl";

function RealEstate(isAuth) {
  const [realEstatePostsLists, setRealEstatePostsLists] = useState([]);
  // const [loadingData, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("/real-estate")
      .then((res) => {
        setRealEstatePostsLists(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log("Effect Called ");
  }, []);

  return (
    <div className="realEstate-page">
      <Card data={realEstatePostsLists} pageName="real-estate" />
    </div>
  );
}

export default RealEstate;
