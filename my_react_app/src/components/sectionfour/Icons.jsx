import React from "react";
import "./icons.css";
import { AiFillEye, AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

const Icons = () => {
  return (
    <div className="icons">
      <AiOutlineHeart className="icon" />
      <SlBasket className="icon" />
      <AiFillEye className="icon" />
    </div>
  );
};

export default Icons;
