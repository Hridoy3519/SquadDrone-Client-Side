import React from "react";
import Rating from "react-rating";
import "./Review.css";
const Review = (props) => {
  const { name, comment, job, rating, img } = props.review;

  console.log(name);
  return (
    <div className="review">
      <div className="img-container">
        <img src={img} id="person-img" alt="" />
      </div>
      <p>
        <i>{comment}</i>
      </p>
      <h5>
        <span className="rating-text">Ratings:</span>
        <Rating
          initialRating={rating}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          readonly
        ></Rating>
      </h5>
      <h3>
        <span>-</span> {name}
        <span className="job-title">, {job}</span>
      </h3>
    </div>
  );
};

export default Review;
