import React, { useState } from 'react';
import './Slider.css'; // Create this CSS file for styling

const cardData = [
  { id: 1, title: 'Card 1', content: 'Content of Card 1' },
  { id: 2, title: 'Card 2', content: 'Content of Card 2' },
  { id: 3, title: 'Card 3', content: 'Content of Card 3' },
  // Add more card data as needed
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 < cardData.length ? prevIndex + 3 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 >= 0 ? prevIndex - 3 : cardData.length - 3));
  };

  return (
    <div className="slider-container">
      <button className="prev-button" onClick={prevSlide}>
        Previous
      </button>
      <div className="slider">
        {cardData.slice(currentIndex, currentIndex + 3).map((card) => (
          <div className="card" key={card.id}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slider;
