import { useState } from 'react';
import axios from 'axios';
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
  const [selectedForm, setSelectedForm] = useState([]);

  const FetchFormType = async (formSelection) => {
    const res = await axios.post('http://localhost:3000/junior-test-server/api/type/get_type.php', {
      type: formSelection
    });
    setSelectedForm(res.data.data);
  };

  const handleTypeSelection = (e) => {
    const formSelection = e.target.value;
    FetchFormType(formSelection);
  };

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
          <select defaultValue="Select type" onChange={handleTypeSelection}>
            <option disabled>Select type</option>
            {['DVD', 'Book', 'Furniture'].map((item, i) => (
              <option id={item} value={item} key={i}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {selectedForm.map((form, i) => (
          <div key={i}>
            <div key={i} className="dynamic-form">
              {form.label.split(',').map((label, i) => (
                <div className="inputs" key={i}>
                  <label htmlFor={form.input_id.split(',')[i]}>{label}</label>
                  <input key={form.input_id.split(',')[i]} type="number" id={form.input_id.split(',')[i]} />
                </div>
              ))}
              <p>Please provide {form.description}</p>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default ProductsAddPage;
