import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>Created by Yahya Mourid    &nbsp; </p>
        <p>
          <FontAwesomeIcon icon={faCopyright}/>
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
