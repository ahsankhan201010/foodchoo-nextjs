import React, { useEffect, useState } from "react";
import { NavLink } from "./../navLink/NavLink";
import Slider from "../slider/Slider";
import { HiMenu } from "react-icons/hi";
import Button from "../button/Button";
import Logo from "../../assets/images/logo/logo_red.svg";

// const NavItem = ({ children, path, activeLink, setActiveLink }) => {
//   return (
//     <div
//       className={`${activeLink ? "activeLink" : ""} navItem`} onClick={() => {setActiveLink(!activeLink) ; console.log(activeLink)}}>
//       <Link href={path}>
//         <Header
//           fontSize={24}
//           fontWeight="medium">
//           {children}
//         </Header>
//       </Link>
//     </div>
//   );
// };

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

  console.log(navbar);
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
          <NavLink href="/" exact className="nav-item nav-link">
            Home
          </NavLink>
          <NavLink href="/about" className="nav-item nav-link">
            About
          </NavLink>
          <NavLink href="/restaurant" className="nav-item nav-link">
            Restaurant
          </NavLink>
          <NavLink href="/customer" className="nav-item nav-link">
            Customer
          </NavLink>
          <NavLink href="/faq" className="nav-item nav-link">
            FAQ’s
          </NavLink>
          <NavLink href="/contact" className="nav-item nav-link">
            Contact
          </NavLink>
        </div>
      </div>
      {/* <div className="nav-btns">
        <Button className="login-btn" light md>
          Login
        </Button>
        <Button red md>
          Sign up
        </Button>
      </div> */}
      <HiMenu onClick={() => setNavbar(true)} className="ham" />
    </div>
  );
};

export default Navbar;
