import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        The product is of high quality and sold by trusted and experienced seller
        </p>
        <p>
        Contact our suppoting care for any issues facing
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
