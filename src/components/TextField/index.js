import "./TextField.css";

export const TextField = (props) => {
  const whenTyped = (event) => {
    props.toChanged(event.target.value);
  };

  return (
    <div className="textField">
      <label>{props.label}</label>
      <input
        value={props.inputValue}
        onChange={whenTyped}
        required={props.mandatory}
        placeholder={props.placeholder}
      />
    </div>
  );
};
