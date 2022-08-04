import "./List.css";

export const List = (props) => {
  return (
    <div className="list">
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
