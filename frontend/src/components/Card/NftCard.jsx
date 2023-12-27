import React from "react";
import { Link } from "react-router-dom";

const NFTCard = ({ image, title, to }) => {
  return (
    <div className="nftcard">
      <div className="img">
        <img src={image} alt="NFT" />
      </div>

      <div className="text">
        <p className="h3">{title}</p>
      </div>
    </div>
  );
};

export default NFTCard;
