import React, { useContext, useEffect } from "react";
import "./topfold.css";
import img1 from "../../assets/1.webp";
import img2 from "../../assets/2.webp";
import img4 from "../../assets/4.webp";
import img3 from "../../assets/3.webp";
import img5 from "../../assets/5.webp";
import Button from "../Button/Button";
import { data } from "../../assets/data/data";
import LiveAuction from "../LiveAuction/LiveAuction";
import { data1 } from "../../assets/data/data1";
import Navdots from "../Navdots/Navdots";
import { Link } from "react-router-dom";
import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";
const Topfold = () => {
  const { checkIfWalletIsConnected, connectWallet, CurrentAccount } =
    useContext(NFTMarketplaceContext);

  return (
    <>
      {" "}
      <div className="topfold absolute-center" id="main">
        <div className="tf-left">
          <div className="tf-heading">
            Where Art Meets Blockchain: Discover{" "}
            <span className="heading-gradient">Unique </span>NFT's Here
          </div>
          <div className="tf-description">
            Unlock a realm of rare digital treasures on our NFT Marketplace. A
            universe where art, technology, and ownership intertwine.
          </div>
          <div className="tf-left-btns">
            {/* <Button btnType="PRIMARY" btnText="EXPLORE" /> */}
            <Link to="/market">
              <button className="p-btn cur-po">EXPLORE</button>
            </Link>
            <Link to="/create">
              <button className="p-btn cur-po">CREATE</button>
            </Link>
            {/* <button className="s-btn">CREATE</button> */}
          </div>
          <div className="tf-left-infoStats">
            <div className="tf-is-infoItem absolute-center">
              <div className="tf-infoItem-count">50+</div>
              <div className="tf-infoItem-label">NFT's</div>
            </div>
            <div className="tf-is-infoItem absolute-center">
              <div className="tf-infoItem-count">20+</div>
              <div className="tf-infoItem-label">ARTISTS</div>
            </div>
            <div className="tf-is-infoItem absolute-center">
              <div className="tf-infoItem-count">100+</div>
              <div className="tf-infoItem-label">BUYERS</div>
            </div>
          </div>
        </div>
        <div className="tf-right">
          <div className="tf-r-bg-blob"></div>
          <div className="tf-right-diamond">
            <div className="tf-r-diamond-item absolute-center">
              <img className="tf-r-diamond-img" src={img1} alt="banner" />
            </div>
            <div className="tf-r-diamond-item absolute-center">
              <img className="tf-r-diamond-img" src={img2} alt="banner" />
            </div>
            <div className="tf-r-diamond-item absolute-center">
              <img className="tf-r-diamond-img" src={img3} alt="banner" />
            </div>
            <div className="tf-r-diamond-item absolute-center">
              <img className="tf-r-diamond-img" src={img4} alt="banner" />
            </div>
          </div>
        </div>

        <Navdots active="main" />
      </div>
      <LiveAuction
        title="Live Auction's"
        type={"auction"}
        data={data}
        id="auction"
      />
      <LiveAuction title="Buy Now" type={"buy"} data={data1} id="buy" />
      <LiveAuction title="NFT 101" type={"info"} id="info" />
    </>
  );
};

export default Topfold;
