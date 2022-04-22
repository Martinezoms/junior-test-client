import './ProductCard.scss';

const ProductCard = ({ product, setCheckedProducts, checkedProducts }) => {
  const { dimensions, size, weight } = product;

  const measurement = size || weight;

  const handleChecked = (e) => {
    if (e.target.checked) {
      setCheckedProducts((prev) => [...prev, product]);
    } else {
      const newCheckedProducts = checkedProducts.filter((item) => item.id !== product.id);
      setCheckedProducts(newCheckedProducts);
    }
  };

  return (
    <div className="product__card-container">
      <div className="product-checkbox">
        <input type="checkbox" id="delete-checkbox" onChange={handleChecked} />
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
