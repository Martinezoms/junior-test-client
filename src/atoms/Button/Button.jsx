import './Button.scss';

const Button = ({ value, color, disabled, handleClick }) => {
  return (
    <div className="button">
      <input type="submit" value={value} disabled={disabled} style={{ background: color }} onClick={handleClick} />
    </div>
  );
};

export default Button;
