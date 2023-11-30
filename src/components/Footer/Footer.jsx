import React from "react";

import footerLogo from "../../assets/logo.svg";
import socialLinkFace from "../../assets/fac.svg";
import socialLinkInsta from "../../assets/insta.svg";
import socialLinkTwi from "../../assets/twi.svg";

const Footer = () => {
  return (
    <footer className="mt-5 pt-5">
      <div className="container">
        <div className="row mt-5 pt-0 pt-md-5">
          <div className="col-md-3">
            <img src={footerLogo} className="img-fluid" />
            <p className="pt-4">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default.
            </p>
          </div>
          <div className="col-md-2 offset-md-1">
            <h5 className="font-weight-bold">Company</h5>
            <ul className="list-unstyled">
              <li className="mt-3">
                <a href="#" className="footer-text text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="footer-text text-decoration-none">
                  Services
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="footer-text text-decoration-none">
                  Pricing
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="footer-text text-decoration-none">
                  Products
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="footer-text text-decoration-none">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 offset-md-1">
            <h5 className="font-weight-bold">Support</h5>
            <ul className="list-unstyled">
              <li className="mt-3">
                <a href="#" className="footer-text text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="footer-text text-decoration-none">
                  Services
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="footer-text text-decoration-none">
                  Pricing
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="footer-text text-decoration-none">
                  Products
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="footer-text text-decoration-none">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 ">
            <h5 className="font-weight-bold">Get In Touch</h5>
            <p className="pt-3">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum'.
            </p>
            <a href="#" className="tex-decoration-none hvr-grow">
              <img src={socialLinkFace} className="img-fluid" />
            </a>
            <a href="#" className="tex-decoration-none hvr-grow">
              <img src={socialLinkInsta} className="img-fluid ml-3" />
            </a>
            <a href="#" className="tex-decoration-none hvr-grow">
              <img src={socialLinkTwi} className="img-fluid ml-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
