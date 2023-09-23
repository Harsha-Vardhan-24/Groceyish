import React from "react";
import Rating from "@mui/material/Rating";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import staticImg from "../images/static/tomato.png";
import LinearProgress from "@mui/material/LinearProgress";

export default function BestSellingCard({
  name,
  price,
  image,
  category,
  product_id,
  addItems,
}) {
  const progressBarStyle = {
    backgroundColor: "#def9ec !important",
    color: "#3bb77e",
  };

  function showProduct(product_id) {
    addItems(product_id);
  }

  return (
    <div className="card-item featured-item bestselling-item">
      <img src={image !== null ? image : staticImg} className="featured-img" />
      <p>{category}</p>
      <h1>{name}</h1>
      <Rating name="read-only" value={4} readOnly />
      <p>
        By <span className="merchant-name">GoodFoods</span>
      </p>
      <div className="bestselling-price">
        <h1>₹{price}</h1>
        <h1>₹{price + 10}</h1>
      </div>
      <LinearProgress
        style={progressBarStyle}
        variant="determinate"
        value={54}
      />
      <p className="stock-left">Sold: 20/50</p>
      <button
        className="selling-btn"
        onClick={() => {
          showProduct(product_id);
        }}
      >
        <LocalMallIcon /> Add
      </button>
    </div>
  );
}
