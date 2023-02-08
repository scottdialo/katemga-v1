import React, { useState, useEffect } from "react";
import Card from "./Card";
import "react-spinner-animated/dist/index.css";
import Axios from "../axiosBaseUrl";

function Electronics() {
  const [electronicPostLists, setElectronicPostLists] = useState([]);

  useEffect(() => {
    Axios.get("/electronic")
      .then((res) => {
        setElectronicPostLists(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="electronic">
      <Card data={electronicPostLists} pageName="electronics" />
    </div>
  );
}

export default Electronics;
