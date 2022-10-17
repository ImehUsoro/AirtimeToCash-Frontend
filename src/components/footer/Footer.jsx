import React from "react";
import { FooterStyles } from "./FooterStyles";
import FooterLogo from "../../assets/FooterLogo.svg";
import SocialLinks from "../../assets/SocialLinks.svg";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer-container">
        <div className="logo-text">
          <div className="footer-logo">
            <img src={FooterLogo} alt="Airtime to cash logo" />
          </div>
          <div className="footer-text">
            <p>Home</p>
            <a href="#about-us"><p>About Airtime2Cash</p></a>
            <p>Contact</p>
          </div>
        </div>
        <hr />
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} Airtime2Cash. All rights reserved
          </p>
          <div className="footer-icons">
            <img src={SocialLinks} alt="social icons" />
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
