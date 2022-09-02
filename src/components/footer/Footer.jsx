import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import LOGO from "../../assets/mylogo.png";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img src={LOGO} alt="logo" />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/afriadialbert">
          <BsFacebook />
        </a>
        <a href="https://instagram.com/albertafriadii">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/albertafriadi">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Albert Afriadi Sigiro. All rights reserverd</small>
      </div>
    </footer>
  );
};

export default Footer;
