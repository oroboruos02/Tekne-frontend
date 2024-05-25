import React, { useState } from 'react';

const StarRating = ({ rating, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = starRating => {
    setHoverRating(starRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = starRating => {
    onRating(starRating);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className="cursor-pointer"
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          >
            {starValue <= (hoverRating || rating) ? '★' : '☆'}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;