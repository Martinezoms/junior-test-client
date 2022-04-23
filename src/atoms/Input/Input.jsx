import './Input.scss';

const Input = ({ id, name }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{name}</label>
      <input type="text" id={id} />
    </div>
  );
};

export default Input;
