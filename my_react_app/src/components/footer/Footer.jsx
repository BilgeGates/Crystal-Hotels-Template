import React from "react";
import "./footer.css";
import CTA from "./CTA";
import CTATwo from "./CTATwo";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__up">
          <div className="list">
            <div className="list__name">Company Info</div>
            <ul>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="list">
            <div className="list__name">Legal</div>
            <ul>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="list">
            <div className="list__name">Features</div>
            <ul>
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
          <div className="list">
            <div className="list__name">Resources</div>
            <ul>
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
          <CTA />
        </div>
        <div className="footer__down">
          <div className="col__1">
            Made With Love By Figmaland All Right Reserved
          </div>
          <CTATwo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
