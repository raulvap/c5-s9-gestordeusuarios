import "./Input.css";

const Input = (props) => {
  // Clase 76: creando el componente input
  const { label, ...otherProps } = props;

  return (
    <div className="field">
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  );
};

export default Input;
