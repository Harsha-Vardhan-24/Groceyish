import React from "react";
import staticImg from "../images/static/tomato.png";

export default function Card() {
  function getBgColor() {
    const colors = [
      "#FEEFEA",
      "#FFF3FF",
      "#F2FCE4",
      "#FEEFEA",
      "#ECFFEC",
      "#FFFCEB",
      "#DEF9EC",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  return (
    <div
      style={{ backgroundColor: getBgColor() }}
      className="categories-item card-item"
    >
      <img className="category-img" alt="categoey card" src={staticImg} />
      <h1>Card Item</h1>
    </div>
  );
}
