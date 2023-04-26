import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-16 flex justify-between items-center bg-gray-200 px-5">
      <p className="text-xl font-bold">E-Commerce</p>
      <span className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
      </span>
    </div>
  );
};

export default Header;
