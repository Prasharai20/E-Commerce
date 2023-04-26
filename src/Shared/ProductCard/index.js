import React from "react";

const ProductCard = () => {
  return (
    <div className="flex flex-col bg-white">
      <img
        src="https://rukminim1.flixcart.com/image/416/416/kqidx8w0/edible-oil/y/y/r/kachi-ghani-pouch-mustard-oil-fortune-original-imag4gb3y5auktfg.jpeg?q=70"
        alt=""
        className="p-4"
      />
      <p className="uppercase text-center">Fortune</p>
      <p className="text-center text-lg font-semibold">Fortune Kachi Ghani</p>
      <p className="text-center text-xl">₹132</p>
      <button className="p-2 bg-red-500 px-4 text-white">Add To Cart</button>
    </div>
  );
};

export default ProductCard;
