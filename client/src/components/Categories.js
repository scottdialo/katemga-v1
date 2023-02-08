import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LaptopIcon from "@mui/icons-material/Laptop";
import { Link } from "react-router-dom";

const Categories = (props) => {
  return (
    <div className="categoryPage">
      <div className="text-center category">
        <h3 className="mb-4">SELECT A CATEGORY</h3>
        <div className="row">
          <div className="col-lg-4">
            <Link to="/createrealestatepost">
              <HomeIcon sx={{ fontSize: 80, color: "green" }} />
              <h2 className="category-title">Real Estate</h2>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/createcar">
              <DirectionsCarIcon sx={{ fontSize: 80, color: "green" }} />
              <h2 className="category-title">Car</h2>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="/create-electronic">
              <LaptopIcon sx={{ fontSize: 80, color: "green" }} />
              <h2 className="category-title">Electronics</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
