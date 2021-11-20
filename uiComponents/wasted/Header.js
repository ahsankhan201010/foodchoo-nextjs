import React from "react";
import Button from "../button/Button";

const Header = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <img
          src={require("../../assets/images/logo/logo_red.svg").default}
          alt=""
          className="logo"
        />
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>{" "}
          <li>
            <a href="">Pioneer Program</a>
          </li>{" "}
          <li>
            <a href="">FAQ’s</a>
          </li>{" "}
          <li>
            <a href="">Home</a>
          </li>{" "}
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="h-btns">
          <Button light md>
            Login
          </Button>
          <Button red lg>
            Sign Up
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Header;
