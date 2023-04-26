import React from "react";
import { Carousel } from "react-responsive-carousel";
import ProductCard from "../../Shared/ProductCard";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <img
        src="https://source.unsplash.com/random/300×200/?fruit"
        alt=""
        className="w-full h-96 object-cover"
      />
      <div className="flex  gap-5 p-6 bg-gray-200">
        {[1, 2, 3, 4, 5].map(() => {
          return <ProductCard />;
        })}
      </div>
    </div>
  );
};

export default Home;
