import React from "react";
import { Carousel } from "react-responsive-carousel";
import ProductCard from "../../Shared/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { category } from "../../Mock";

const Home = () => {
  const navigate = useNavigate();

  const handleClickProduct = (id) => {
    navigate(`/product/${id}`);
    // window.location.href = `/product/${id}`;
  };

  return (
    <div className="flex flex-col w-full">
      <img
        src="https://source.unsplash.com/random/300×200/?fruit"
        alt=""
        className="w-full h-96 object-cover"
      />
      <div className="flex flex-col gap-5 p-6 bg-gray-200">
        {category.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.category_name}</p>
              <div className="flex gap-10 justify-center">
                {item?.data?.map((product) => {
                  return (
                    <>
                      <ProductCard
                        product={product}
                        onClick={() => handleClickProduct(product.id)}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
