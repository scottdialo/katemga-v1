import { useEffect } from "react";
import Axios from "../../axiosBaseUrl";
import { useParams } from "react-router-dom";
import CardSinglePage from "./CardSinglePage";
import { useState } from "react";

const RealEstatePage = () => {
  const { postName } = useParams();

  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    Axios.get("/real-estate/" + postName)
      .then((res) => {
        setItemData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Effect Called ");
  }, [postName]);

  return (
    <>
      <CardSinglePage
        pictureUrl={itemData.pictureUrl}
        title={itemData.title}
        location={itemData.location}
        price={itemData.price}
        phone={itemData.phone}
        year={itemData.year}
      />

      <div className="listing-section">
        <h2>Property Details</h2>

        <div className="listing-details-table">
          <span>Year Built</span> <p>{itemData.year}</p>
          <span>Location</span> <p>{itemData.location}</p>
          <span>Description</span> <p>{itemData.description}</p>
        </div>

        <div className="my-5">
          <h2>You Might Also Like</h2>
          listing related items
        </div>
      </div>
    </>
  );
};

export default RealEstatePage;
