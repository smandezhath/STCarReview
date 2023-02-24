import React, { useState } from 'react';
import './CarDetails.css';

const CarDetails = ({ title, companyName, model, category, description, year, mileage, price }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Store the rating and comment in local storage
    localStorage.setItem('carRating', rating);
    localStorage.setItem('carComment', comment);
    alert("Rating = "+rating+" Comment = "+comment)
  };

  return (
    <div  id="car-details-container">
      <img
         id="car-image"
        src="https://www.bugatti.com/fileadmin/_processed_/sei/p54/se-image-bde5a930d9189654c884b25dc3e1935a.webp"
        alt="Bugatti"
      />
      <div  id="car-details">
        <h1>{title}</h1>
        <p>Company Name: {companyName}</p>
        <p>Model: {model}</p>
        <p>Category: {category}</p>
        <p>Description: {description}</p>
        <p>Year of Manufacturing: {year}</p>
        <p>Mileage: {mileage}</p>
        <p>Price: {price}</p>
        <div  id="rating-container">
          <label htmlFor="rating">Rate this car (0-5):</label>
          <input type="radio" name="rating" value="0"  onChange={handleRatingChange} />
          <input type="radio" name="rating" value="1"  onChange={handleRatingChange} />
          <input type="radio" name="rating" value="2"  onChange={handleRatingChange} />
          <input type="radio" name="rating" value="3"  onChange={handleRatingChange} />
          <input type="radio" name="rating" value="4"  onChange={handleRatingChange} />
          <input type="radio" name="rating" value="5"  onChange={handleRatingChange} />
        </div>
        <textarea placeholder="Leave your comment here" value={comment} onChange={handleCommentChange}></textarea>
        <button onClick={handleSubmit} id = "button">Submit</button>
      </div>
    </div>
  );
};

export default CarDetails;
