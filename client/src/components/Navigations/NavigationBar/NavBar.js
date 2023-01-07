

import { Link } from "react-router-dom";
import NavItem from "./NavItem";



const Navbar = (props) => {


    return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Eleventh navbar example">
        <div className="nav-container">

            <div className="logo-wrap">
                <Link to="/" className="logo">
                    <h3 className="logo">katemga</h3>
                    <p className="slogan">Buy | Sell | Rent</p>
                </Link>
                </div>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse justify-content-md-end collapse" id="navbarsExample08" >
                <ul className="navbar-nav">
                    
                    { props.isAuth ? <>
                    <NavItem signUserOut={props.signUserOut}>
                        Log Out
                    </NavItem>
                    <NavItem to="/mylistings"> My Listings</NavItem>
                    </>: <NavItem link="/login"> Login </NavItem>}

                    <NavItem link="/real-estate"> RealEstate </NavItem>
                    <NavItem link="/cars-trucks"> Cars/Trucks</NavItem>
                    <NavItem link="/electronics"> Electonics </NavItem>
                    <NavItem link="/contact-us"> Contact </NavItem>

                    <Link to="/categories" className="c-listing">
                    Create Listing
                    </Link>
                
                </ul>
            </div>
        </div>
    </nav>

    )
}


export default Navbar;