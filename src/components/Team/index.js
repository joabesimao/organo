import { Collaborator } from "../Collaborator";
import "./Team.css";

export const Team = (props) => {
  return (
    props.collaborators.length > 0 && (
      <section
        className="squad"
        style={{ backgroundColor: props.colorPrimary }}
      >
        <h3 style={{ borderColor: props.colorSecundary }}>{props.name}</h3>
        <div className="collaborators">
          {props.collaborators.map((collaborators) => (
            <Collaborator
              name={collaborators.name}
              office={collaborators.office}
              image={collaborators.image}
            />
          ))}
        </div>
      </section>
    )
  );
};
