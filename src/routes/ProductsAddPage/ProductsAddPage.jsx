import { Link } from 'react-router-dom';
import { Button, Input } from '../../atoms/index';
import './ProductsAddPage.scss';

const inputDetails = [
  {
    id: 'sku',
    name: 'sku'
  },
  {
    id: 'name',
    name: 'name'
  },
  {
    id: 'price',
    name: 'price ($)'
  }
];
const ProductsAddPage = () => {
  return (
    <div className="products__add-container">
      <header>
        <div>
          <h2>Product Add</h2>
        </div>
        <div className="products__add-btns">
          <Button type="submit" value="save" color="#04AA6D" />
          <Link to="/">
            <Button type="button" value="cancel" color="#c50101" />
          </Link>
        </div>
      </header>
      <hr />
      <form id="product__form">
        {inputDetails.map((detail) => (
          <Input key={detail.id} {...detail} />
        ))}
        <div className="type-switcher">
          <label htmlFor="type-switcher">Type switcher</label>
          <select>
            {['DVD', 'Book', 'Furniture'].map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default ProductsAddPage;
