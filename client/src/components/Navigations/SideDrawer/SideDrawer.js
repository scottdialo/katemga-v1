import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop"
import { Link } from 'react-router-dom';

const sideDrawer = ( props ) => {


    
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }


    return (
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
               
            <div className="logo-wrap">
          <Link to="/" className="logo">
            <h3 className="logo" id="logo">
              YENGEMA
            </h3>
            <p className="slogan">Buy | Sell | Rent</p>
          </Link>
        </div>
              
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;