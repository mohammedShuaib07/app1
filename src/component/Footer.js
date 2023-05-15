import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h1>mohammed shuaib b</h1>
      <div className="footericon">
        <Link to={"https://github.com/mohammedShuaib07"}>
          <i class="fa-brands fa-github"></i>
        </Link>
        <Link to={"https://www.linkedin.com/in/mohammed-shuaib-bb825b247/"}>
          <i class="fa-brands fa-linkedin"></i>
        </Link>
        <Link to={"mailto:mohammedshuaibb45@gmail.com"}>
          <i class="fa-solid fa-envelope"></i>
        </Link>
        {/* <Link to={"https://www.instagram.com/"}> */}
        <i class="fa-brands fa-instagram"></i>
        {/* </Link> */}
      </div>
      <h2>Copyright © 2022 shuaib. All rights reserved</h2>
      {/* <div className="resume">
      <i class="fa-regular fa-file-lines"></i>
      </div> */}
    </div>
  );
};

export default Footer;
