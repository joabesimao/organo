import { useEffect, useState } from "react";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Team } from "./components/Team";
import {
  createColaborator,
  getAllColaborators,
} from "./services/pessoas-service";

function App() {
  const squad = [
    {
      nome: "Presidente",
      colorPrimary: "#57c278",
      colorSecundary: "lightgreen",
    },
    {
      nome: "Diretor Administrativo",
      colorPrimary: "#82cffa",
      colorSecundary: "purple",
    },
    {
      nome: "Diretor Comercial",
      colorPrimary: "#f0f8e2",
      colorSecundary: "#a6d157",
    },
    {
      nome: "Gerente de Vendas",
      colorPrimary: "#fde7e8",
      colorSecundary: "#ed6869",
    },
    {
      nome: "Gerente de Operações",
      colorPrimary: "#fae9f5",
      colorSecundary: "#db6ebf",
    },
    {
      nome: "Gerente de Marketing",
      colorPrimary: "#57c278",
      colorSecundary: "white",
    },
    {
      nome: "Vendedores",
      colorPrimary: "#82cffa",
      colorSecundary: "purple",
    },
    {
      nome: "Serviço Tecnico",
      colorPrimary: "#f0f8e2",
      colorSecundary: "#a6d157",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    updateCollaborator();
    getColab();
  }, []);

  const getColab = async () => {
    const get = await getAllColaborators();
    setCollaborators(get);
  };

  const updateCollaborator = async () => {
    const updatedCollaborators = await getAllColaborators();
    setCollaborators(updatedCollaborators);
  };

  const newCollaboratorAdd = async (collaborators) => {
    await createColaborator(collaborators);
    updateCollaborator();
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={squad.map((team) => team.nome)}
        toTheCollaborator={(collaborator) => newCollaboratorAdd(collaborator)}
      />
      {squad.map((squad) => (
        <Team
          key={squad.nome}
          nome={squad.nome}
          colorPrimary={squad.colorPrimary}
          colorSecundary={squad.colorSecundary}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.time === squad.nome
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
