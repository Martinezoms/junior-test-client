import './Button.scss';

const Button = ({ value, color, disabled }) => {
  return (
    <div className="button">
      <input type="submit" value={value} disabled={disabled} style={{ background: color }} />
    </div>
  );
};

export default Button;
