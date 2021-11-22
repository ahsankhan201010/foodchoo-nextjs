import React from "react";
import Logo from "../../assets/images/logo/logo_red.svg";
import Paragraph from "../paragraph/Paragraph";
import FB from "../../assets/images/icons/fb.png";
import insta from "../../assets/images/icons/insta.png";
import linkedin from "../../assets/images/icons/linkedin.png";

const Footer = () => {
  return (
    <>
      <div className="i-am-footer container-fluid">
        <div className="container footer-items-wrapper">
          <div className="row footer-row">
            <div className="col-lg-6">
              <img className="mb-3" src={Logo.src} alt="logo" />
              <Paragraph customClass="footer-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                dignissimos recusandae porro eligendi neque, maiores enim
                dolorem tempore voluptates consectetur facilis eos esse quis id?
                In nostrum et quo quisquam.
              </Paragraph>
            </div>
            <div className="col-lg-3">
              <ul className="footer-links">
                <li>
                  <h3 className="footer-title">Useful Links</h3>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="footer-links">
                <li>
                  <h3 className="footer-title">Contact</h3>
                </li>
                <li>
                  <a href="tel:+123456789">Call: +123 4560 7890</a>
                </li>
                <li>
                  <a href="mailto:someone@example.com">
                    Email: example@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="mr-2" src={insta.src} alt="instagram" />
                  </a>
                  <a href="#">
                    <img className="mr-2" src={FB.src} alt="facebook" />
                  </a>
                  <a href="#">
                    <img className="mr-2" src={linkedin.src} alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © Copyrights FoodChoo 2022, All rights reserved
      </div>
    </>
  );
};

export default Footer;
