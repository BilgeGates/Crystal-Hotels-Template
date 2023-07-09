import React from "react";
import "./header.css";
import Nav from "../nav/Nav";
import Home from "../../assets/home.png";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <Nav />
      <div className="container row__container">
        <div className="col">
          <h5>Welcome!</h5>
          <h1>organization of catering in the hotel business</h1>
          <h4>outsourcing company</h4>
          <CTA />
        </div>
        <div className="col">
          <img src={Home} alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="116"
            height="138"
            viewBox="0 0 116 138"
            fill="none"
            className="vector"
          >
            <path d="M0 0H116V138H0V0Z" fill="#FF6551" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
            className="ellipse"
          >
            <circle cx="29.5" cy="29.5" r="29.5" fill="#FEB896" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
