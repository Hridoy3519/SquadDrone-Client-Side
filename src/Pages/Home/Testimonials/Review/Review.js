import React from "react";
import "./Review.css";
const Review = (props) => {
  const { name, comment, job, img } = props.review;

  console.log(name);
  return (
    <div className="review">
      <div className="img-container">
        <img
          src={img}
          id="person-img"
          alt=""
        />
      </div>
      <p>
        <i>
          {comment}
        </i>
      </p>
      <h3>
        <span>-</span> {name}
        <span className='job-title'>, {job}</span>
      </h3>
    </div>
  );
};

export default Review;
