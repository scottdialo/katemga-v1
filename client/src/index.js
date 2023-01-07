import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./components/Navigations/Navigations";
import Footer from "./components/Footer";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="viewport">
        <Navigation />
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
