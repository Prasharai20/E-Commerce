import React from "react";
import { Button } from "@mui/material";

const ProductCard = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col bg-white select-none" onClick={props.onClick}>
      <img src={props.product.product_image} alt="" className="p-4 h-48" />
      <p className="uppercase text-center">{props.product.brand}</p>
      <p className="text-center text-lg font-semibold">
        {props.product.title.slice(0, 16)}
      </p>
      <p className="text-center text-xl">₹{props.product.price}</p>
      <Button variant="contained" className="!m-2">
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
