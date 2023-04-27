import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  console.log("Product ID", id);
  //   console.log("Product ID", window.location.pathname);
  return <div>ProductPage {id} </div>;
};

export default ProductPage;
