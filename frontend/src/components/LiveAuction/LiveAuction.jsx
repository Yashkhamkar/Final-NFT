import React from "react";
import Slider from "react-slick";
import "./liveauction.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import NFTCard from "../Card/NftCard";
import img1 from "../../assets/NFT101/NFT1.png";
import img2 from "../../assets/NFT101/NFT2.png";
import img3 from "../../assets/NFT101/NFT3.png";
import img4 from "../../assets/NFT101/NFT4.png";
import img5 from "../../assets/NFT101/NFT5.png";
import img6 from "../../assets/NFT101/NFT6.png";
import NewCard from "../Card/NewCard";
import Navdots from "../Navdots/Navdots";
const NFTS = [
  {
    image: img1,
    title: "What is a NFT?",
    to: "/101nft",
  },
  {
    image: img2,
    title: "How to buy a NFT?",
    to: "/101buy",
  },
  {
    image: img3,
    title: "What is minting?",
    to: "/101mint",
  },
  {
    image: img4,
    title: "How to create a NFT?",
    to: "/101create",
  },
  {
    image: img5,
    title: "How to sell a NFT?",
    to: "/101sell",
  },
  {
    image: img6,
    title: "What is a crypto wallet?",
    to: "/101wallet",
  },
];
const LiveAuction = ({ title, type, data, id }) => {
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
    <div className="live-nfts" id={`${id}`}>
      <div className="live-heading absolute-center">
        <span className="heading-gradient">{title}</span>
        {/* <div className="tl-r-bg-blob"></div> */}
      </div>
      <div className="slider-container">
        <div className="tl-r-bg-blob"></div>
        {type === "info" ? (
          <div>
            <Slider {...settings}>
              {NFTS.map((item, index) => (
                <div key={index} className="cur-po">
                  <Link to={`${item.to}`}>
                    <NFTCard image={item.image} title={item.title} />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="slider-container">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index} className="cur-po">
                  <NewCard
                    image={item.image}
                    title={item.title}
                    timeRemaining={item.timeRemaining}
                    price={item.price}
                    type={type}
                  />
                </div>
              ))}
            </Slider>
            <Link to="/market">
              <button
                className="n-btn"
                style={{ marginTop: "30px", left: "670px" }}
              >
                See More
              </button>
            </Link>
          </div>
        )}{" "}
        <div className="navdots-container">
          <Navdots active={`${id}`} />
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
