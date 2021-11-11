import React from 'react';
import './ExploreBanner.css';
const ExploreBanner = () => {
    return (
        <div className="explore-banner d-flex justify-content-center align-items-center">
            <h3 className="heading">Home <span className="page">{`> All Products`}</span></h3>
        </div>
    );
};

export default ExploreBanner;