import React from "react";
import "./styleHeaderSection.css";
const HeaderSection = () => {
  return (
    <div className="containerHeaderSection">
      <div className="left-content">
        <span>Lưu</span>
        <span className="left-content_center">Giải</span>
        <span>Giờ</span>
      </div>
      <div className="center-content">
        <span>Chủ</span>
        <span>Tỷ số</span>
        <span>Khách</span>
        <span>C/H-T</span>
        <span>Số liệu</span>
      </div>
      <div className="right-content">
        <select>
          <option>Sbobet</option>
          <option>188bet</option>
          <option>W88</option>
        </select>
      </div>
    </div>
  );
};

export default HeaderSection;
