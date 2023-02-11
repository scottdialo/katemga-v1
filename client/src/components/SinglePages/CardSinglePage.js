import { useState } from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import "./singlePage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CardSinglePage = (props) => {
  // console.log(props);

  const [showPhone, SetShowPhone] = useState(false);

  const onClickHandler = () => {
    SetShowPhone(true);
  };

  return (
    <div className="container-fluid p-0 ">
      <div className="row justify-content-center">
        <div className="col-lg-7 ">
          
          <Carousel infiniteLoop showArrows labels showThumbs="false">
            {props.pictureUrl.map((pic) => {
              return (
                <div key={props.id} >
                  <img className="item-img"  src={pic} alt={props.title}/>
                  {/* <p className="legend"> {+" " + ind}</p> */}
                </div>
              );
            })}
          </Carousel>
         

          <div className="item-title-container">
            <h2 className="my-3"> {props.title}</h2>
            <p>{props.location}</p>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="item-details-container shadow-sm">
            <p className="mt-2-5">List Price</p>
            <div className="heading-2 mt-1">
              ${parseInt(props.price).toLocaleString()}
            </div>

            <p className="mb-2">Posted by</p>

            <div className="user-profile">
              <img className="circle-img" src="" alt="" />
              <div className="text-center">
                <Link to="">Samuel Ogunniyi</Link>
              </div>
            </div>

            <button onClick={onClickHandler} className="btn">
              {showPhone ? (
                <>
                   <a href={"tel:" + props.phone}> {props.phone} </a>{" "}
                </>
              ) : (
                <>
                  <PhoneIcon className="mx-2" /> Show Contact
                </>
              )}
            </button>

            <div className="safety-tips-container">
              <div className="safety-tips-title">
                <HealthAndSafetyIcon /> Safety tips
              </div>
              <div className="safety-tips">
                1. Do not pay in advance even for the delivery
              </div>
              <div className="safety-tips">
                2. Try to meet at a safe, public location
              </div>
              <div className="safety-tips">
                3. Check the item BEFORE you buy it
              </div>
              <div className="safety-tips">
                4. Pay only after collecting the item
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSinglePage;
