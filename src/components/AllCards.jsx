import React from "react";
import staticImg from "../images/static/tomato.png";
import Rating from "@mui/material/Rating";

export default function AllCards(props) {
  return (
    <section>
      <h1 className="card-heading">{props.heading}</h1>
      <div className="card-item featured-item all-cards">
        <div className="single-card">
          <img src={staticImg} className="featured-img" />
          <div>
            <h1>Tomatoes</h1>
            <Rating name="read-only" value={4} readOnly />
            <p>
              By <span className="merchant-name">GoodFoods</span>
            </p>
            <div className="bestselling-price">
              <h1>₹100</h1>
              <h1>₹150</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="card-item featured-item all-cards">
        <div className="single-card">
          <img src={staticImg} className="featured-img" />
          <div>
            <h1>Tomatoes</h1>
            <Rating name="read-only" value={4} readOnly />
            <p>
              By <span className="merchant-name">GoodFoods</span>
            </p>
            <div className="bestselling-price">
              <h1>₹100</h1>
              <h1>₹150</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="card-item featured-item all-cards">
        <div className="single-card">
          <img src={staticImg} className="featured-img" />
          <div>
            <h1>Tomatoes</h1>
            <Rating name="read-only" value={4} readOnly />
            <p>
              By <span className="merchant-name">GoodFoods</span>
            </p>
            <div className="bestselling-price">
              <h1>₹100</h1>
              <h1>₹150</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
