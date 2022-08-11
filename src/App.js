import { useState } from "react";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Team } from "./components/Team";

function App() {
  const squad = [
    {
      name: "Presidente",
      colorPrimary: "#57c278",
      colorSecundary: "lightgreen",
    },
    {
      name: "Diretor Administrativo",
      colorPrimary: "#82cffa",
      colorSecundary: "purple",
    },
    {
      name: "Diretor Comercial",
      colorPrimary: "#f0f8e2",
      colorSecundary: "#a6d157",
    },
    {
      name: "Gerente de Vendas",
      colorPrimary: "#fde7e8",
      colorSecundary: "#ed6869",
    },
    {
      name: "Gerente de Operações",
      colorPrimary: "#fae9f5",
      colorSecundary: "#db6ebf",
    },
    {
      name: "Gerente de Marketing",
      colorPrimary: "#57c278",
      colorSecundary: "white",
    },
    {
      name: "Vendedores",
      colorPrimary: "#82cffa",
      colorSecundary: "purple",
    },
    {
      name: "Serviço Tecnico",
      colorPrimary: "#f0f8e2",
      colorSecundary: "#a6d157",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const newCollaboratorAdd = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={squad.map((team) => team.name)}
        toTheCollaborator={(collaborator) => newCollaboratorAdd(collaborator)}
      />
      {squad.map((squad) => (
        <Team
          key={squad.name}
          name={squad.name}
          colorPrimary={squad.colorPrimary}
          colorSecundary={squad.colorSecundary}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === squad.name
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
