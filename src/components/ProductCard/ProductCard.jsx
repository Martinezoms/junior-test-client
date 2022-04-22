import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { dimensions, size, weight } = product;

  const measurement = size || weight;
  return (
    <div className="product__card-container">
      <div className="product-checkbox">
        <input type="checkbox" id="delete-checkbox" />
      </div>
      <div className="product-details">
        <p>{product.id}</p>
        <p>{product.name}</p>
        <p>${product.price}</p>
        {dimensions ? (
          <p>
            {dimensions.height}x{dimensions.width}x{dimensions.length}
          </p>
        ) : (
          <p>{measurement}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
