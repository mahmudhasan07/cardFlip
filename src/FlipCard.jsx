import React, { useState } from 'react';
import "./flip.css"; // Import CSS for styling

function FlipCard({ frontContent, backContent }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>\

      <div className="flip-card-inner">
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
      
    </div>
  );
}

export default FlipCard;
