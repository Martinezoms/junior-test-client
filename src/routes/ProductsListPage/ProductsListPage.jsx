import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import { ProductCard } from '../../components';
import { PRODUCTS } from '../../db';
import './ProductsListPage.scss';

const ProductsListPage = () => {
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  const handleMassDelete = () => {
    let productsAfterMassDelete = products;
    for (let i = 0; i < checkedProducts.length; i++) {
      productsAfterMassDelete = productsAfterMassDelete.filter((product) => product.id !== checkedProducts[i].id);
    }
    setProducts(productsAfterMassDelete);
    setCheckedProducts([]);
  };

  return (
    <div className="products__list-container">
      <header>
        <div>
          <h2>Product List</h2>
        </div>
        <div className="products__list-btns">
          <Link to="add">
            <Button type="button" value="add" color="#04AA6D" />
          </Link>
          <Button
            id="delete-product-btn"
            type="button"
            value="mass delete"
            color="#c50101"
            disabled={checkedProducts.length > 0 ? false : true}
            handleClick={handleMassDelete}
          />
        </div>
      </header>
      <hr />
      <div className="products__list-cards">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            setCheckedProducts={setCheckedProducts}
            checkedProducts={checkedProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsListPage;
