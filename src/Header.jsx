import React from "react";
import rlogo from "./Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <img
            className="rlogo"
            src={rlogo}
            style={{ marginLeft: "8px" }}
            alt="rlogo"
          />
        </div>
        <div className="nav-right">
          <a href="https://www.linkedin.com/in/rajesh-nambi/">
            <FaLinkedin className="social" color="white" />
          </a>
          <a href="https://github.com/rajeshnambi1122">
            <FaGithub className="social" color="white" />
          </a>
          <a href="mailto:rajeshnambi2016@gmail.com">
            <IoMdMail className="social" color="white" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
