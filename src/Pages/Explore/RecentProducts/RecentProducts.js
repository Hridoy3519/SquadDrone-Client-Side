import React from "react";
import Rating from "react-rating";
import "./RecentProducts.css";
const RecentProducts = ({ product }) => {
  const { img, title, rating, price } = product;
  return (
    <div className="card mb-4" style={{ maxWidth: 540}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{paddingTop : 0 }}>
            <h5 className="card-title recent-product-title">{title}</h5>
            <p className="card-text">
              <small className="text-muted">
                <Rating
                  initialRating={rating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  readonly
                ></Rating>
              </small>
            </p>
            <p><small className="price-text">${price}.00</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProducts;
