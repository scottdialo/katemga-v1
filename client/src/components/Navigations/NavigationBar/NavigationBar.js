import { Link } from "react-router-dom";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import  "./NavigationBar.css"
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawer from "../SideDrawer/SideDrawer";
import { useState } from "react";

const Navbar = (props) => {

   const [showSideDrawer, setShowSideDrawer] = useState(false);



const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
}

const sideDrawerToggleHandler = () => {
    setShowSideDrawer(prev => !prev)
}



  return (
    <nav
      className="navbar navbar-light bg-light rounded"
      aria-label="Eleventh navbar example"
    >
      <div className="nav-container">
       
        <div className="logo-wrap">
          <Link to="/" className="logo">
            <h3 className="logo" id="logo">
              YENGEMA
            </h3>
            <p className="slogan">Buy | Sell | Rent</p>
          </Link>
        </div>

       <DrawerToggle  clicked={sideDrawerToggleHandler} />
        
        <SideDrawer
          open={showSideDrawer}
          closed={sideDrawerClosedHandler}
        />
       
        <div className="desktop-view-only">
        <NavigationItems
         signUserOut={props.signUserOut}
         isAuth={props.isAuth}
          />
        </div>
         
        
         
        
      </div>
    </nav>
  );
};

export default Navbar;
