import "./Team.css";

export const Team = (props) => {
  return (
    <section className="squad" style={{ backgroundColor: props.colorPrimary }}>
      <h3 style={{ borderColor: props.colorSecundary }}>{props.name}</h3>
    </section>
  );
};
