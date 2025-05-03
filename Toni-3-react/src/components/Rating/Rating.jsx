import React, { useState } from 'react';
import './Rating.css';

const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const ratingLevels = [
    { value: 1, label: 'Shit', color: '#ff4d4d' },
    { value: 2, label: 'Norm', color: '#ffa94d' },
    { value: 3, label: 'Cool', color: '#73d13d' },
    { value: 4, label: 'Epic', color: '#1890ff' },
  ];

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 4; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= ratingValue ? 'active' : ''}`}
          style={{ color: i <= ratingValue ? ratingLevels[i - 1].color : '#d9d9d9' }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const handleRatingClick = (value) => {
    setRatingValue(value);
  };

  return (
    <div className="rating-widget">
      <div className="star-display">{renderStars()}</div>
      <div className="rating-buttons">
        {ratingLevels.map((level) => (
          <button
            key={level.value}
            className={`rating-button ${ratingValue === level.value ? 'active' : ''}`}
            onClick={() => handleRatingClick(level.value)}
            style={{
              backgroundColor: ratingValue === level.value ? level.color : '#434343',
              color: '#fff',
            }}
          >
            {level.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Rating;