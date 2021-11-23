import React from "react";

import Header from "../header/Header";
// import Arrow from "./../../assets/images/arrow-right.png";
import Link  from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { NavLink } from "./../../uiComponents/navLink/NavLink";

const Backdrop = ({ navbar, setNavbar }) => (
  <div
    onClick={() => setNavbar(false)}
    className="backdrop"
    style={{
      opacity: navbar ? "0.4" : "0",
      pointerEvents: navbar ? "all" : "none",
    }}></div>
);

const SliderListItem = ({ children, to, setNavbar, exact }) => (
  <div className="slider-list-item">
    <Header onClick={() => setNavbar(false)} fontWeight="medium" fontSize={24}>
      <Link href={to}>
        {children}
      </Link>
    </Header>
  </div>
);

const Slider = ({ setNavbar, navbar }) => {
  return (
    <>
      <div
        style={{
          transition: "transform 250ms ease-in-out",
          transform: navbar ? "scaleX(1)" : "scaleX(0)",
        }}
        className="slider">
        <div className="slider-header">
          <HiChevronRight
            onClick={() => setNavbar(false)}
            className="arrow-right"
          />
        </div>
        <div className="slider-list">

        <NavLink href="/" exact setNavbar={setNavbar} className="nav-item nav-link">
            Home
          </NavLink>
          <NavLink href="/about" setNavbar={setNavbar} className="nav-item nav-link">
            About
          </NavLink>
          <NavLink href="/restaurant" setNavbar={setNavbar} className="nav-item nav-link">
            Restaurant
          </NavLink>
          <NavLink href="/customer" setNavbar={setNavbar} className="nav-item nav-link">
            Customer
          </NavLink>
          <NavLink href="/faq" setNavbar={setNavbar} className="nav-item nav-link">
            FAQ’s
          </NavLink>
          <NavLink href="/contact" setNavbar={setNavbar} className="nav-item nav-link">
            Contact
          </NavLink>

          {/* <SliderListItem exact setNavbar={setNavbar} to="/">
            Home
          </SliderListItem>
          
          <SliderListItem setNavbar={setNavbar} to="/about">
            About
          </SliderListItem>
          <SliderListItem setNavbar={setNavbar} to="/restaurant">
            Restaurant
          </SliderListItem>
          <SliderListItem setNavbar={setNavbar} to="/customer">
            Customer
          </SliderListItem>
          <SliderListItem setNavbar={setNavbar} to="/faq">
            FAQ’s
          </SliderListItem>
          <SliderListItem setNavbar={setNavbar} to="/contact">
            Contact
          </SliderListItem> */}
          {/* <SliderListItem setNavbar={setNavbar} to="/fourth-module">
            Login
          </SliderListItem> */}
        </div>
      </div>
      <Backdrop navbar={navbar} setNavbar={setNavbar} />
    </>
  );
};

export default Slider;
