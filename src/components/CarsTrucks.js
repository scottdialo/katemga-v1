import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "../axiosBaseUrl";
import Card from "./Card";

function CarsTrucks() {
  const [carPostListings, setCarPostListings] = useState([]);

  useEffect(() => {
    Axios.get("/cars")
      .then((res) => {
        setCarPostListings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Effect Called ");
  }, []);

  return (
    <>
      <div className="car-page">
        <Card data={carPostListings} pageName="cars-trucks" />
      </div>
    </>
  );
}

export default CarsTrucks;
