import React, { useState, useEffect } from "react";
import Card from "./Card";
import Axios from "../axiosBaseUrl";
import Spinner from "./UI/Spinner/Spinner";

function Homepage() {
  const [realEstatePostsLists, setRealEstatePostsLists] = useState([]);
  const [carPostListings, setCarPostListings] = useState([]);
  const [electronicListings, setElectronicListings] = useState([]);

  const [loading, setLoading] = useState(true);

  //display all posts in the homepage
  useEffect(() => {
    Axios.get("/real-estate")
      .then((res) => {
        setRealEstatePostsLists(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //cars listing
  useEffect(() => {
    Axios.get("/cars")
      .then((res) => {
        setCarPostListings(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //electronic listing
  useEffect(() => {
    Axios.get("/electronic")
      .then((res) => {
        setElectronicListings(res.data);
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
        <>
          <div className="homepage">
            <h3> Real Estate</h3>

            <Card data={realEstatePostsLists} pageName="real-estate" />
            <h3> Cars & Trucks</h3>

            <Card data={carPostListings} pageName="cars-trucks" />
            <h3> Phones | Laptops | Tablets</h3>
            <Card data={electronicListings} pageName="electronics" />
          </div>
        </>
      )}
    </>
  );
}

export default Homepage;
