import './NavigationItems.css';
import { Link } from 'react-router-dom';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = (props) => {
   
   
       
    return (
    
    <div className="justify-content-md-end navbar-item-container">
    <ul className="navbar-nav">
      {props.isAuth ? (
        <>
          <NavigationItem clicked={props.signUserOut}>Log Out</NavigationItem>
          <NavigationItem link="/mylistings"> My Listings </NavigationItem>
        </>
      ) : (
        <NavigationItem clicked={props.close} link="/login"> Login </NavigationItem>
      )}

      <NavigationItem clicked={props.close} link="/real-estate"> RealEstate </NavigationItem>
      <NavigationItem clicked={props.close} link="/cars-trucks"> Cars/Trucks</NavigationItem>
      <NavigationItem clicked={props.close} link="/electronics"> Electronics </NavigationItem>
      <NavigationItem clicked={props.close} link="/contact-us"> Contact </NavigationItem>

      <Link to="/categories" className="c-listing">
        Create Listing
      </Link>
      <NavigationItem link="/login"></NavigationItem>
    </ul>
  </div>)
};

export default NavigationItems;