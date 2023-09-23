import React from "react";
import Rating from "@mui/material/Rating";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import staticImg from "../images/static/tomato.png";

export default function FeaturedCard({
  name,
  price,
  image,
  category,
  product_id,
  addItems,
}) {
  function showProduct(product_id) {
    addItems(product_id);
  }

  return (
    <div className="card-item featured-item">
      <img src={image !== null ? image : staticImg} className="featured-img" />
      <p>{category}</p>
      <h1>{name}</h1>
      <Rating name="read-only" value={4} readOnly />
      <p>
        By <span className="merchant-name">GoodFoods</span>
      </p>
      <div className="featured-price">
        <h1>₹{price}</h1>
        <h1>₹{price + 10}</h1>
        <button
          className="action-btn"
          onClick={() => {
            showProduct(product_id);
          }}
        >
          <LocalMallIcon /> Add
        </button>
      </div>
    </div>
  );
}
