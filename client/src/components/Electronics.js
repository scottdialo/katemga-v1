import React, { useState, useEffect } from "react";
import Card from "./Card";
import "react-spinner-animated/dist/index.css";
import Axios from "../axiosBaseUrl";
import Spinner from "./UI/Spinner/Spinner";

function Electronics() {
  const [electronicPostLists, setElectronicPostLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("/electronic")
      .then((res) => {
        setElectronicPostLists(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner title="Loading" />
      ) : (
        <div className="electronic">
          <Card data={electronicPostLists} pageName="electronics" />
        </div>
      )}
    </>
  );
}

export default Electronics;
