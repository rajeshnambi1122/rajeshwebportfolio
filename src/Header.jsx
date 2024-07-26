import React from "react";
import rlogo from "./rlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <img className="rlogo" src={rlogo} alt="rlogo" />
        </div>
        <div className="nav-right">
          <FaLinkedin className="social" role="button" />
          <FaGithub className="social" />
          <IoMdMail className="social" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
