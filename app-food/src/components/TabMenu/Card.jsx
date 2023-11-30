// Card.js
import React from 'react';


const Card = ({ imageSrc, title, price }) => (
  <div className="card border-0">
    <div className="card-body p-0">
      <img src={imageSrc} className="w-100 img-fluid" alt={title} />
      <div className="body">
        <h6>{title}</h6>
        <p><span>$</span>{price}</p>
        <button className="btn btn-order">Order Now</button>
      </div>
    </div>
  </div>
);

export default Card;
