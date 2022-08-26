import { Collaborator } from "../Collaborator";
import "./Team.css";

export const Team = (props) => {
  return (
    props.collaborators.length > 0 && (
      <section
        className="squad"
        style={{ backgroundColor: props.colorPrimary }}
      >
        <h3 style={{ borderColor: props.colorSecundary }}>{props.nome}</h3>
        <div className="collaborators">
          {props.collaborators.map((collaborators) => (
            <Collaborator
              color={props.colorSecundary}
              key={collaborators.nome}
              nome={collaborators.nome}
              cargo={collaborators.cargo}
              imagem={collaborators.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};
