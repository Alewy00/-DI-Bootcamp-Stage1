// Card.js
import React from "react";

const Card = ({ id, name, image, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={image} alt={name} />
    </div>
  );
};

export default Card;
