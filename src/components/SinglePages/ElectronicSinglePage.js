
import { useState, useEffect } from "react";
import {  useParams,} from "react-router-dom";
import CardSinglePage from "./CardSinglePage";
import Axios from "axios";




const ElectronicPage = () => {

    const { postName } = useParams();

    const [ itemData, setItemData ] = useState([])

    useEffect(() => {

        Axios.get("http://localhost:3001/electronic/" + postName)
          .then((res) => {

            setItemData (res.data);
           
          })
          .catch((err) => {
            console.log(err);
          });
    
        console.log("Effect Called ");
      }, [postName]);


   
    


    
     return (
        <>
         <CardSinglePage
            title={itemData.title}
            location={itemData.location}
            price={itemData.price}
            phone={itemData.phone}
        />

        <div className="listing-section">
            <h2>Electronic Details</h2>

            <div className="listing-details-table">
            <span>Brand</span> <p>{itemData.brand}</p>
            <span>Model</span> <p>{itemData.model}</p>
            <span>Color</span> <p>{itemData.color}</p>
            <span>Description</span> <p>{itemData.description}</p>
    
         </div>

     


            <div className="my-5">

                <h2>You Might Also Like</h2>

                listing related items


            </div>
    
        </div>



    </>

     )
}


export default ElectronicPage;