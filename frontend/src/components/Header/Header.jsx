import React from "react";
import './Header.css'
import logo from "../../assets/images/shine-logo.png";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="header-comp">
        <div className="header">
        <div className="logo-container">
          <img src={logo}></img>
        </div>
      </div>
      <SignedOut>
        <SignInButton className="signin-btn" />
      </SignedOut>
      <SignedIn>
        <UserButton className="profile-btn"   />
      </SignedIn>
    </header>
  );
};

export default Header;
