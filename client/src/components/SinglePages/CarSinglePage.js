import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardSinglePage from "./CardSinglePage";
import Axios from "../../axiosBaseUrl";

const CarPage = () => {
  const { postName } = useParams();

  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("/cars/" + postName)
      .then((res) => {
        setItemData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postName]);

  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </div>
      ) : (
        <>
          <CardSinglePage
           id={itemData._id}
            title={itemData.title}
            pictureUrl={itemData.pictureUrl}
            brand={itemData.brand}
            location={itemData.location}
            price={itemData.price}
            phone={itemData.phone}
            year={itemData.year}
            model={itemData.model}
          />

          <div className="listing-section">
            <h2>Car Details</h2>

            <div className="listing-details-table">
              <span>Year</span> <p>{itemData.year}</p>
              <span>Brand</span> <p>{itemData.brand}</p>
              <span>Model</span> <p>{itemData.model}</p>
              <span>Mileage</span> <p>{itemData.mileage}</p>
              <span>Color</span> <p>{itemData.color}</p>
              <span>Location</span> <p>{itemData.location}</p>
              <span>Description</span> <p>{itemData.description}</p>
            </div>

           
          </div>
        </>
      )}
    </>
  );
};

export default CarPage;
