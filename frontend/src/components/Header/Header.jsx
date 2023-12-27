import React, { useContext, useEffect, useState } from "react";
import Onboard from "@web3-onboard/core";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { TfiWallet } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/wallet_logo.png";
import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

const Dropdown = ({ onLogout, onProfile }) => {
  return (
    <div className="dropdown-container">
      <ul className="dropdown">
        <div
          style={{
            background: "rebeccapurple",
            listStyle: "none",
          }}
        >
          <li onClick={onProfile}>Profile</li>
          <li onClick={onLogout}>Logout</li>
        </div>
      </ul>
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const {
    checkIfWalletIsConnected,
    connectWallet,
    CurrentAccount,
    isConnected,
    disconnectWallet,
  } = useContext(NFTMarketplaceContext);
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleProfile = () => {
    navigate("/profile");
    setShowDropdown(false);
  };

  const handleLogout = () => {
    disconnectWallet();
    setShowDropdown(false);
  };

  // ... (other state and functions)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="logo" style={{ marginRight: "8px" }} />
          <span
            className="heading-gradient cur-po"
            style={{ marginTop: "10px" }}
          >
            YK's NFT
          </span>
        </Link>
      </div>
      <ul className="app__navbar-links" style={{ marginLeft: "200px" }}>
        <li className="app__flex p-text" style={{ paddingTop: "10px" }}>
          <Link to={`/`}>HOME</Link>
        </li>
        {["market", "create", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
        <li
          style={{
            position: "relative",
            marginLeft: "200px",
            marginBottom: "-15px",
          }}
        >
          {isConnected ? (
            <>
              <button className="n-btn" onClick={handleToggleDropdown}>
                {CurrentAccount
                  ? `${CurrentAccount.slice(0, 6)}...${CurrentAccount.slice(
                      -4
                    )}`
                  : "loading..."}
                <IoMdArrowDropdown />
              </button>
              {showDropdown && (
                <Dropdown onProfile={handleProfile} onLogout={handleLogout} />
              )}
            </>
          ) : (
            <button className="n-btn" onClick={connectWallet}>
              Connect Wallet <TfiWallet className="wallet-icon" />
            </button>
          )}
        </li>
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "market", "create", "contact", "profile"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Header;
