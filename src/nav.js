import React from 'react';
import './nav.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Navbar() {    
  return (
    <div className="Navbar">
      <a href="#home" className="BoxLogo">
        <div />
        Nate Donato
      </a>

      <div className="NavLinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>   
      </div>

      <div className="NavLinks Icons">
        <a href="https://github.com/natedonato/">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nate-donato-781a9b187/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Navbar;