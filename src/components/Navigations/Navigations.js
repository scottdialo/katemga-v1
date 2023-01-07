import React, { useState } from "react";
import "./Navigations.css";
import { Routes, Route} from "react-router-dom";
import Homepage from "../Homepage";
import RealEstate from "../RealEstate";
import CarsTrucks from "../CarsTrucks";
import Electronics from "../Electronics";
import ContactUs from "../ContactUs";
import CreateRealEstatePost from "../../CreateListings/CreateRealEstatePost";
import Login from "../Login";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import MyListings from "../MyListings";
import CreateCars from "../../CreateListings/CreateCars";
import CreateElectronic from "../../CreateListings/CreateElectronic";
import Categories from "../Categories";
import CarPage from "../SinglePages/CarSinglePage";
import ElectronicPage from "../SinglePages/ElectronicSinglePage";
import RealEstatePage from "../SinglePages/RealEstateSinglePage";
import Navbar from "./NavigationBar/NavBar";

function Navigation() {

  const [isAuth, setIsAuth] = useState(false);
  let navigate = useNavigate();

  const signUserOut = () => {

    alert("working");

    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };


  return (


    <div>

         <Navbar 
          isAuth={isAuth}
          signUserOut={signUserOut}
         />


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
