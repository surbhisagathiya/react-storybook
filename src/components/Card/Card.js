import React from "react";
import "./Card.css";

function Card({ children }) {
  return <h2 className="card">{children}</h2>;
}

export default Card;
