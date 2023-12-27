import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";
import { data } from "../../assets/data/data.js";
import "./brands.css";
const Brands = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div style={{ paddingTop: "250px" }}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="cur-po">
            <Card
              image={item.image}
              title={item.title}
              timeRemaining={item.timeRemaining}
              price={item.price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brands;
