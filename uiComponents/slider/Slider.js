import React from "react";

import Header from "../header/Header";
// import Arrow from "./../../assets/images/arrow-right.png";
import { Link } from "next/link";
import { HiOutlineX } from "react-icons/hi";

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
      <a to={to} exact activeClassName="active-link">
        {children}
      </a>
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
          <HiOutlineX
            onClick={() => setNavbar(false)}
            className="arrow-right"
          />
        </div>
        <div className="slider-list">
          <SliderListItem exact setNavbar={setNavbar} to="/">
            Home
          </SliderListItem>
          <SliderListItem setNavbar={setNavbar} to="/first-module">
            About
          </SliderListItem>
          <SliderListItem setNavbar={setNavbar} to="/second-module">
            Pioneer Program
          </SliderListItem>
          <SliderListItem setNavbar={setNavbar} to="/third-module">
            FAQ’s
          </SliderListItem>
          <SliderListItem setNavbar={setNavbar} to="/fourth-module">
            Contact
          </SliderListItem>
          <SliderListItem setNavbar={setNavbar} to="/fourth-module">
            Login
          </SliderListItem>
        </div>
      </div>
      <Backdrop navbar={navbar} setNavbar={setNavbar} />
    </>
  );
};

export default Slider;
