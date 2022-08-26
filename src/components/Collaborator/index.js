import "./Collaborator.css";

export const Collaborator = (props) => {
  return (
    <div className="coll">
      <div className="header" style={{ backgroundColor: props.color }}>
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="footer">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};
