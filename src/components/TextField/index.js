import "./TextField.css";

export const TextField = (props) => {
  let valueInput = "Joabe";

  const aoDigitado = (event) => {
    valueInput = event.target.value;

    console.log(valueInput);
  };

  return (
    <div className="textField">
      <label>{props.label}</label>
      <input
        value={valueInput}
        onChange={aoDigitado}
        required={props.mandatory}
        placeholder={props.placeholder}
      />
    </div>
  );
};
