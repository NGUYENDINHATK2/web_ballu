import React from "react";
// import logo from "../../logo.svg";
// import star from "../../Star.png";
// import arrow from "../../Arrow.png";
import logo from "../Logo.png";
import star from "../Star.png";
import arrow from "../Arrow.png";
import "./TableHeader.css";
const TableSectionHeader = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={star} alt="star" className="header__logo_img_start" />
        <img src={logo} alt="logo" className="header__logo_img" />
        <p className="header_title">
          TÂY BAN NHA: <span className="header_sub">LaLiga Santander</span>
        </p>
      </div>
      <div className="header__down">
        <img src={arrow} alt="arrow" className="header__down_img" />
      </div>
    </div>
  );
};

export default TableSectionHeader;
