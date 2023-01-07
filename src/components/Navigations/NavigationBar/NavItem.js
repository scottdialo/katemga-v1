import { Link } from "react-router-dom";

const NavItem = (props) => {

    return (
        <>
          <li className="nav-item">
            <Link className="nav-link" onClick={props.signUserOut} to={props.link}>{props.children}</Link>
          </li>
        </>
    )
}

export default NavItem;