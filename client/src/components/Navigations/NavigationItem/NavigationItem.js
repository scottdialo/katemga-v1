import { Link } from "react-router-dom";

const NavigationItem = (props) => {

    return (
        <>
          <li className="nav-item">
            <Link className="nav-link" onClick={props.clicked} to={props.link}>{props.children}</Link>
          </li>
        </>
    )
}

export default NavigationItem;