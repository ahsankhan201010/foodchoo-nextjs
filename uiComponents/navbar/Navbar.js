import React, { useEffect, useState } from "react";
import Header from "../header/Header";
// import { Link } from "next/link";
// import Dropdown from "./../Dropdown/Dropdown";
// import logo from "./../../assets/images/logo.png";
// import ham from "./../../assets/images/ham.png";
import Slider from "../slider/Slider";
import { HiMenu } from "react-icons/hi";
import Button from "../button/Button";
import Logo from "../../assets/images/logo/logo_red.svg";

var options = [
  {
    name: "First Module",
    to: "/first-module",
  },
  {
    name: "Second Module",
    to: "/second-module",
  },
  {
    name: "Third Module",
    to: "/third-module",
  },
  {
    name: "Forth Module",
    to: "/fourth-module",
  },
];

const NavItem = ({ children, path }) => {
  return (
    <div
      // style={{
      //   borderBottom:
      //     pathname === path
      //       ? "1px solid var(--primary-color-one)"
      //       : "1px solid transparent",
      // }}
      className="navItem">
      <a href={path}>
        <Header
          //   color={pathname === path ? "var(--primary-color-one)" : "black"}
          fontSize={24}
          fontWeight="medium">
          {children}
        </Header>
      </a>
    </div>
  );
};

const Navbar = () => {
  var [navbar, setNavbar] = useState(false);
  var [scroll, setScroll] = useState(0);
  var scrollTracker = () => {
    if (window.scrollY < 1) {
      setScroll(0);
    } else {
      setScroll(1);
    }
  };
  useEffect(() => {
    //CDM
    window.addEventListener("scroll", scrollTracker);
  }, []);
  // console.log(`scroll value - ${scroll}`);
  return (
    <div
      style={{
        backgroundColor: scroll === 0 ? "white" : "rgba(255,255,255,0.9)",
      }}
      className="navbar">
      <Slider navbar={navbar} setNavbar={setNavbar} />
      <div style={{ alignItems: "flex-start" }} className="logoArea center">
        <img className="logo" src={Logo.src} style={{ objectFit: "fill" }} />
      </div>
      <div className="menuItemArea">
        <div className="navSimpleItems">
          <NavItem path="/">Home</NavItem>
          <NavItem path="/">About</NavItem>
          <NavItem path="/">Pioneer Program</NavItem>
          <NavItem path="/">FAQ’s</NavItem>
          <NavItem path="/">Contact</NavItem>
        </div>
      </div>
      <div className="nav-btns">
        <Button className="login-btn" light md>
          Login
        </Button>
        <Button red md>
          Sign up
        </Button>
      </div>
      <HiMenu onClick={() => setNavbar(true)} className="ham" />
    </div>
  );
};

export default Navbar;
