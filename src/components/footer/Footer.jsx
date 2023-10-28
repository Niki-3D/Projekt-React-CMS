import "./Footer.scss";
import React, { useContext } from "react";
import { AppContext } from "./../../context/app.context";

const Footer = () => {
  const { textInput } = useContext(AppContext);

  return (
    <div className="footer-container container">
      <h2>{textInput}</h2>
    </div>
  );
};

export default Footer;
