import { useState } from "react";
import { Button } from "../Button";
import { List } from "../List";
import { TextField } from "../TextField";
import "./Form.css";

export const Form = (props) => {
  const teams = [
    "Presidente",
    "Diretor Administrativo",
    "Diretor Comercial",
    "Gerente de Vendas",
    "Gerente de Operações",
    "Gerente de Marketing",
    "Vendedores",
    "Serviço Tecnico",
  ];
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const toSubmit = (event) => {
    event.preventDefault();
    props.toTheCollaborator({
      name,
      office,
      image,
      team,
    });
  };
  return (
    <section className="style-form">
      <form onSubmit={toSubmit}>
        <h2>Preencha os dados para criar o card </h2>
        <TextField
          mandatory={true}
          label="Nome"
          placeholder="digite seu nome"
          inputValue={name}
          toChanged={(inputValue) => setName(inputValue)}
        />
        <TextField
          mandatory={true}
          label="Cargo"
          placeholder="digite seu cargo"
          inputValue={office}
          toChanged={(inputValue) => setOffice(inputValue)}
        />
        <TextField
          label="Imagem"
          placeholder="digite o endereço da imagem"
          inputValue={image}
          toChanged={(inputValue) => setImage(inputValue)}
        />
        <List
          mandatory={true}
          label="Time"
          itens={teams}
          inputValue={team}
          toChanged={(inputValue) => setTeam(inputValue)}
        />

        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
