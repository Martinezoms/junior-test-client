import './Button.scss';

const Button = ({ value, color, disabled, handleClick, id, type }) => {
  return (
    <div className="button">
      <input
        type={type}
        id={id}
        value={value}
        disabled={disabled}
        style={{ background: color }}
        onClick={handleClick}
      />
    </div>
  );
};

export default Button;
