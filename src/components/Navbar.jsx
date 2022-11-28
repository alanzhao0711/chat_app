import React from "react";
import test_img from "../person_pic/p1.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">WeChat</span>
      <div className="user">
        <img src={test_img} alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
