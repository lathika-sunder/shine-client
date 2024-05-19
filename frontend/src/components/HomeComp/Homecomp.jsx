import React, { useEffect } from "react";
import "./HomeComp.css";
import logo from "../../assets/images/shine-logo.png";
import heroImg from "../../assets/images/hero-img.png";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Homecomp = () => {
  const user  = useUser();
  const role = user.user && user.user.publicMetadata && user.user.publicMetadata.role ? user.user.publicMetadata.role : "user";

  return (
    <div className="home-page">
      <div className="home-page-content">
        <div className="hero-image-container">
          <img className="hero-image" src={heroImg} alt="Hero" />
        </div>
        <div className="hero-content">
          <h1>Shine.</h1>
          <p>
            Revitalize your ride with Shine's expert touch. Experience the gleam
            of perfection with every wash. Trust Shine to keep your vehicle
            shining bright.
          </p>
          {role === "admin" ? (
            <div>
              <Link to="/admin-dashboard"><button className="hero-btn">Dashboard</button></Link>
            </div>
          ) : (
            <Link to="/order">
              <button className="hero-btn">Get Started</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homecomp;
