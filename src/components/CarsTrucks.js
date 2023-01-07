import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import Card from "./Card";


function CarsTrucks() {
  const [carPostListings, setCarPostListings] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/cars/")
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
      <Card 
      data={carPostListings} 
      pageName="cars-trucks"
      />
    </div>

   

    
    </>
  );
}

export default CarsTrucks;
