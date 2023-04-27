import React from "react";

const ProductCard = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col bg-white" onClick={props.onClick}>
      <img src={props.product.product_image} alt="" className="p-4" />
      <p className="uppercase text-center">{props.product.brand}</p>
      <p className="text-center text-lg font-semibold">{props.product.title}</p>
      <p className="text-center text-xl">₹{props.product.price}</p>
      <button className="p-2 bg-red-500 px-4 text-white">Add To Cart</button>
    </div>
  );
};

export default ProductCard;
