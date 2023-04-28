import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ProductCard from "../../Shared/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { category } from "../../Mock";

const Home = () => {
  const [image, setImage] = useState(
    "https://source.unsplash.com/random//1920x500/?lucknow/1"
  );

  const banner1 = "https://source.unsplash.com/random/1920x500/?lucknow/1";
  const banner2 = "https://source.unsplash.com/random/1920x500/?lucknow/2";

  const navigate = useNavigate();

  const handleClickProduct = (id) => {
    navigate(`/product/${id}`);
    // window.location.href = `/product/${id}`;
  };

  useEffect(() => {
    setTimeout(() => {
      setImage(
        image === banner2 ? banner1 : image === banner1 ? banner2 : banner1
      );
    }, 5000);
  });

  return (
    <div className="flex flex-col w-full">
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        interval={5000}
      >
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <img src={banner2} alt="" />
        </div>
      </Carousel>
      {/* <img src={image} alt="" className="w-full h-96 object-cover" />
      <span className="flex justify-between relative bottom-52 px-5">
        <button onClick={() => setImage(image === banner1 ? banner2 : banner1)}>
          Prev
        </button>
        <button onClick={() => setImage(image === banner2 ? banner1 : banner2)}>
          Next
        </button>
      </span> */}
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
