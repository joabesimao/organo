import "./TextField.css";

export const TextField = (props) => {
  return (
    <div className="textField">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};
