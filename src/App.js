import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Team } from "./components/Team";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const newCollaboratorAdd = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        toTheCollaborator={(collaborator) => newCollaboratorAdd(collaborator)}
      />
      <Team name="Presidente" />
      <Team name="Diretor Administrativo" />
      <Team name="Diretor Comercial" />
    </div>
  );
}

export default App;
