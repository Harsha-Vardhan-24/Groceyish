import React from "react";
import Rating from "@mui/material/Rating";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import staticImg from "../images/static/tomato.png";
import LinearProgress from "@mui/material/LinearProgress";

export default function BestSellingCard() {
  const progressBarStyle = {
    backgroundColor: "#def9ec !important",
    color: "#3bb77e",
  };

  return (
    <div className="card-item featured-item bestselling-item">
      <img src={staticImg} className="featured-img" />
      <p>Vegetables</p>
      <h1>Tomatoes</h1>
      <Rating name="read-only" value={4} readOnly />
      <p>
        By <span className="merchant-name">GoodFoods</span>
      </p>
      <div className="bestselling-price">
        <h1>₹100</h1>
        <h1>₹150</h1>
      </div>
      <LinearProgress
        style={progressBarStyle}
        variant="determinate"
        value={54}
      />
      <p className="stock-left">Sold: 20/50</p>
      <button className="selling-btn">
        <LocalMallIcon /> Add
      </button>
    </div>
  );
}
