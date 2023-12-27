import React from "react";
import "./card.css";

const Card = ({ image, title, timeRemaining, price, type }) => {
  return (
    <div className="card absolute-center">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <img src={image} height={285} width={241} alt="Card Back" />
          </div>
        </div>
        <div className="front">
          <div className="front-content">
            <div className="description">
              <div className="title">
                <div className="info">
                  <p className="info-item">
                    <span className="heading-gradient">Name:</span> {title}
                  </p>
                  <p className="info-item">
                    <span className="heading-gradient">Price:</span> {price}
                  </p>
                  {type === "auction" ? (
                    <p className="info-item">
                      <span className="heading-gradient">Time left:</span>{" "}
                      {timeRemaining}
                    </p>
                  ) : null}
                </div>
                <hr className="divider" />
                <button
                  className="p-btn cur-po"
                  style={{ marginTop: "4px", marginLeft: "50px" }}
                >
                  {type === "auction" ? "BID NOW" : "BUY NOW"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
