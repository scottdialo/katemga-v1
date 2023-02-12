import React from "react";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";

function Footer() {
  const day = new Date();

  const currentDate = day.getFullYear();

  return (
    <footer>
      <div className="footer-left">
        <p>Copyright © {currentDate} | All rights reserved.</p>
      </div>
      <div className="footer-center">
        <p>Made with ❤️ in California</p>
      </div>
      <div className="footer-right">
        <img src={facebook} alt="facebook-icon" />
        <img src={instagram} alt="instagram-icon" />
      </div>
    </footer>
  );
}

export default Footer;
