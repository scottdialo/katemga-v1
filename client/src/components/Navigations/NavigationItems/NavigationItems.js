import './NavigationItems.css';
import { Link } from 'react-router-dom';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = (props) => {
   
   
       
    return (
    
    <div className="justify-content-md-end navbar-item-container">
    <ul className="navbar-nav">
      {props.isAuth ? (
        <>
          <NavigationItem signUserOut={props.signUserOut}>Log Out</NavigationItem>
          <NavigationItem link="/mylistings"> My Listings </NavigationItem>
        </>
      ) : (
        <NavigationItem link="/login"> Login </NavigationItem>
      )}

      <NavigationItem link="/real-estate"> RealEstate </NavigationItem>
      <NavigationItem link="/cars-trucks"> Cars/Trucks</NavigationItem>
      <NavigationItem link="/electronics"> Electronics </NavigationItem>
      <NavigationItem link="/contact-us"> Contact </NavigationItem>

      <Link to="/categories" className="c-listing">
        Create Listing
      </Link>
      <NavigationItem link="/login"></NavigationItem>
    </ul>
  </div>)
};

export default NavigationItems;