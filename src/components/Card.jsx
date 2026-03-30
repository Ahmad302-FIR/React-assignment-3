import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt="card" className="card-image" />

      <h2 className="card-title">{props.title}</h2>

      <p className="card-description">{props.description}</p>

      <button className="card-button">Read More</button>
    </div>
  );
}

export default Card;