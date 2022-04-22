import React from 'react';
import Button from '../../atoms/Button/Button';
import { ProductCard } from '../../components';
import { products } from '../../db';
import './ProductsListPage.scss';

const ProductsListPage = () => {
  return (
    <div className="products__list-container">
      <header>
        <div>
          <h2>Product List</h2>
        </div>
        <div className="products__list-btns">
          <Button type="button" value="add" color="#04AA6D" />
          <Button id="delete-product-btn" type="button" value="mass delete" color="#c50101" disabled={true} />
        </div>
      </header>
      <hr />
      <div className="products__list-cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsListPage;
