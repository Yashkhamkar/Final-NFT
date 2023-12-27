// Market.jsx
import React, { useContext, useEffect, useState } from "react";
import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";
import NewCard from "../Card/NewCard";
import "./market.css"

const Market = () => {
  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setnfts] = useState([]);
  const [nftsCopy, setnftsCopy] = useState([]);
  useEffect(() => {
    fetchNFTs().then((item) => {
      setnfts(item.reverse());
      setnftsCopy(item);
      console.log(nfts);
    });
  }, []);

  return (
    <div className="live-heading absolute-center">
      <span className="heading-gradient" style={{ marginTop: "30px" }}>
        MarketPlace
      </span>
      <div className="card-container">
        {nfts.map((item, index) => (
          <NewCard
            key={index}
            image={item.image.replace(
              "ipfs://",
              "https://gateway.pinata.cloud/ipfs/"
            )}
            title={item.name}
            price={item.price}
            timeRemaining={item.timeRemaining}
            type="buy"
          />
        ))}
      </div>
    </div>
  );
};

export default Market;
