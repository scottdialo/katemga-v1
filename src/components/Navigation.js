import React, { useState } from "react";
import "../navigation.css";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import RealEstate from "./RealEstate";
import CarsTrucks from "./CarsTrucks";
import Electronics from "./Electronics";
import ContactUs from "./ContactUs";
import CreateRealEstatePost from "../CreateListings/CreateRealEstatePost";
import Login from "./Login";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import MyListings from "./MyListings";
import CreateCars from "../CreateListings/CreateCars";
import CreateElectronic from "../CreateListings/CreateElectronic";
import Categories from "./Categories";
import CarPage from "./SinglePages/CarSinglePage";
import ElectronicPage from "./SinglePages/ElectronicSinglePage";
import RealEstatePage from "./SinglePages/RealEstateSinglePage";

function Navigation() {
  const [isAuth, setIsAuth] = useState(false);
  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };
  return (
    <div>
      <nav className="nav-bar">
        <div className="logo-wrap">
          <Link to="/" className="logo">
            <h3 className="logo" id="logo">KATEMGA</h3>
            <p className="slogan" id="slogan">Buy | Sell | Rent</p>
          </Link>
        </div>
        <div className="navbar-container">
          {!isAuth ? (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          ) : (
            <>
              <Link className="nav-link" onClick={signUserOut}>
                Log Out
              </Link>
              <Link to="/mylistings" className="nav-link">
                My Listings
              </Link>
            </>
          )}
          <Link to="/real-estate" className="nav-link">
            Real Estate
          </Link>
          <Link to="/cars-trucks" className="nav-link">
            Cars/Trucks
          </Link>
          <Link to="/electronics" className="nav-link">
            Electronics
          </Link>

          <Link to="/contact-us" className="nav-link">
            Contact
          </Link>

          <Link to="/categories" className="c-listing">
            Create Listing
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/real-estate" element={<RealEstate />}></Route>
        <Route path="/cars-trucks" element={<CarsTrucks />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>

        <Route
          path="/createrealestatepost"
          element={<CreateRealEstatePost />}
        />
        <Route path="/createcar" element={<CreateCars />} />
        <Route path="/create-electronic" element={<CreateElectronic />} />

        <Route path="/real-estate/:postName" element={<RealEstatePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cars-trucks/:postName" element={<CarPage />} />
        <Route path="/electronics/:postName" element={<ElectronicPage />} />

        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/mylistings" element={<MyListings />}></Route>
      </Routes>
    </div>
  );
}

export default Navigation;
