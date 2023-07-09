import React from "react";
import "./sectionthree.css";
import Icon1IMG from "../../assets/icon1.png";
import Icon2IMG from "../../assets/icon2.png";
import Icon3IMG from "../../assets/icon3.png";
import Icon4IMG from "../../assets/icon4.png";
import Icon5IMG from "../../assets/icon5.png";

const SectionThree = () => {
  return (
    <section id="section3">
      <div className="container row__container">
        <img src={Icon1IMG} alt="" />
        <img src={Icon2IMG} alt="" />
        <img src={Icon3IMG} alt="" />
        <img src={Icon4IMG} alt="" />
        <img src={Icon5IMG} alt="" />
      </div>
    </section>
  );
};

export default SectionThree;
