import React from "react";
import rlogo from "./public/rlogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "animate.css";

const Header = () => {
  return (
    <header className="animate__animated animate__fadeInDown animate__delay-1s">
      <nav className="desktop-nav">
        <div className="nav-left">
          <img
            className="rlogo"
            src={rlogo}
            style={{ marginLeft: "8px" }}
            alt="rlogo"
          />
        </div>
        <div className="nav-right">
          <a href="https://www.linkedin.com/in/rajesh-nambi/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social desktop-social" color="white" />
          </a>
          <a href="https://github.com/rajeshnambi1122" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social desktop-social" color="white" />
          </a>
          <a href="mailto:rajeshnambi2016@gmail.com">
            <IoMdMail className="social desktop-social" color="white" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
