import React, { useState, useEffect } from "react";
import Card from "./Card";
import "react-spinner-animated/dist/index.css";
import Axios from "../axiosBaseUrl";
import Spinner from "./UI/Spinner/Spinner";

function RealEstate(isAuth) {
  const [realEstatePostsLists, setRealEstatePostsLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("/real-estate")
      .then((res) => {
        setRealEstatePostsLists(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log("Effect Called ");
  }, []);

  return (
    <>
      {loading ? (
        <Spinner title="Loading" />
      ) : (
        <div className="realEstate-page">
          <Card data={realEstatePostsLists} pageName="real-estate" />
        </div>
      )}
    </>
  );
}

export default RealEstate;
