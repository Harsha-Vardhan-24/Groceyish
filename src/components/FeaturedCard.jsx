import React from "react";
import Rating from "@mui/material/Rating";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import staticImg from "../images/static/tomato.png";

export default function FeaturedCard() {
  return (
    <div className="card-item featured-item">
      <img src={staticImg} className="featured-img" />
      <p>Vegetables</p>
      <h1>Tomatoes</h1>
      <Rating name="read-only" value={4} readOnly />
      <p>By <span className="merchant-name">GoodFoods</span></p>
      <div className="featured-price">
        <h1>₹100</h1>
        <h1>₹150</h1>
        <button className="action-btn">
          <LocalMallIcon /> Add
        </button>
      </div>
    </div>
  );
}
