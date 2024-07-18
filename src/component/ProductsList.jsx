import React from "react";
import { Link } from "react-router-dom";

export default function ProductsList({ product }) {
  return (
    <li className="product-item">
      <article>
        <img src={product.imageUrl} alt="img" />
        <div>
          <h3>{product.name}</h3>
        </div>
        <div className="product-item-actions">
          <button className="button">
            <Link to={`/products/${product.id}`}>Detail</Link>
          </button>
        </div>
      </article>
    </li>
  );
}
