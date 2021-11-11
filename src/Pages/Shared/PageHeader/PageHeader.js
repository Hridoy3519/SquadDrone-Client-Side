import React from "react";
import './PageHeader.css';
const PageHeader = ({page}) => {
  return (
    <div className="explore-banner d-flex justify-content-center align-items-center">
      <h3 className="heading">
        Home <span className="page">{`> ${page}`}</span>
      </h3>
    </div>
  );
};

export default PageHeader;
