import React from "react";
import "./HomeComp.css";
import logo from "../../assets/images/shine-logo.png";
import heroImg from "../../assets/images/hero-img.png";
import { Link } from "react-router-dom";

const Homecomp = () => {

  return (
    <div className="home-page">
      
      <div className="home-page-content">
        <div className="hero-image-container">
          <img className="hero-image" src={heroImg}></img>
        </div>
        <div className="hero-content">
          <h1>Shine.</h1>
          <p>
            Revitalize your ride with Shine's expert touch.Experience the gleam
            of perfection with every wash. Trust Shine to keep your vehicle
            shining bright.
          </p>
          <Link to='/order'>
          <button className="hero-btn">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homecomp;
