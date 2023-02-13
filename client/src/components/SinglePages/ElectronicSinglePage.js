import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardSinglePage from "./CardSinglePage";
import Axios from "../../axiosBaseUrl";
import Spinner from "../UI/Spinner/Spinner";
const ElectronicPage = () => {
  const { postName } = useParams();

  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("/electronic/" + postName)
      .then((res) => {
        setItemData(res.data);
        window.scrollTo(0, 0);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postName]);

  return (
    <>
      {loading ? <Spinner title="Loading"/> : (
        <>
          <CardSinglePage
             id={itemData._id}
            title={itemData.title}
            location={itemData.location}
            price={itemData.price}
            phone={itemData.phone}
            pictureUrl={itemData.pictureUrl}
          />

          <div className="listing-section">
            <h2>Electronic Details</h2>

            <div className="listing-details-table">
              <span>Brand</span> <p>{itemData.brand}</p>
              <span>Model</span> <p>{itemData.model}</p>
              <span>Color</span> <p>{itemData.color}</p>
              <span>Description</span> <p>{itemData.description}</p>
            </div>

           
          </div>
        </>
      )}
    </>
  );
};

export default ElectronicPage;
