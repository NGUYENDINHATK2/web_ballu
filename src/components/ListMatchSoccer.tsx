import React from "react";
import star from "../Star.png";
import flag from "../Flag.png";
import chart from "../Chart.png";
import uniform from "../Uniform.png";
import football from "../Football.png";
import "./ListMatchSoccer.css";
const ListMatchSoccer = () => {
  return (
    <div className="section">
      <div className="section__left">
        <img src={star} alt="star" className="header__logo_img_start" />
        <span className="section__left_title">42’</span>
      </div>
      <div className="section__right">
        <div className="section__right_center">
          <span className="section_right_center_2">2</span>
          <span className="section_right_center_1">[1]</span>
          <span className="section_right_center_4">Barcelona</span>
          <span className="section_right_center_3">2 - 2</span>
          <span className="section_right_center_4">Barcelona</span>
          <span className="section_right_center_1">[1]</span>
          <span className="section_right_center_2">2</span>
        </div>
        <div className="section__right_bottom">
          <div className="mr">
            <span className="text_red">4 - 3</span>
            <span className="text_blue">2 - 2</span>
          </div>
          <div>
            <img src={flag} alt="star" className="header__logo_img_start" />
            <img src={chart} alt="star" className="header__logo_img_start" />
            <img src={uniform} alt="star" className="header__logo_img_start" />
            <img src={football} alt="star" className="header__logo_img_start" />
          </div>
          <div className="mr">
            <span className="text_red">-0.98</span>
            <span className="text_blue">0.86</span>
          </div>
          <div className="mr">
            <span className="text_red">-1</span>
            <span className="text_blue">2.5/3</span>
          </div>
          <div className="mr_last">
            <span className="text_red">0.86</span>
            <span className="text_blue">1.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMatchSoccer;
