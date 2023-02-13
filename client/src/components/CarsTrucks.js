import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "../axiosBaseUrl";
import Card from "./Card";
import Spinner from "./UI/Spinner/Spinner";

function CarsTrucks() {
  const [carPostListings, setCarPostListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("/cars")
      .then((res) => {
        setCarPostListings(res.data);
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
        <div className="car-page">
          <Card data={carPostListings} pageName="cars-trucks" />
        </div>
      )}
    </>
  );
}

export default CarsTrucks;
