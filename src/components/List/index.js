import "./List.css";

export const List = (props) => {
  return (
    <div className="list">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.toChanged(event.target.value)}
        required={props.required}
        value={props.inputValue}
      >
        <option value=""> </option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
