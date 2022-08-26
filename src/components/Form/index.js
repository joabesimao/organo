import { useState } from "react";
import { Button } from "../Button";
import { List } from "../List";
import { TextField } from "../TextField";
import "./Form.css";

export const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const toSubmit = (event) => {
    event.preventDefault();
    props.toTheCollaborator({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };
  return (
    <section className="style-form">
      <form onSubmit={toSubmit}>
        <h2>Preencha os dados para criar o card </h2>
        <TextField
          mandatory={true}
          label="Nome"
          placeholder="digite seu nome"
          inputValue={nome}
          toChanged={(inputValue) => setNome(inputValue)}
        />
        <TextField
          mandatory={true}
          label="Cargo"
          placeholder="digite seu cargo"
          inputValue={cargo}
          toChanged={(inputValue) => setCargo(inputValue)}
        />
        <TextField
          label="Imagem"
          placeholder="digite o endereço da imagem"
          inputValue={imagem}
          toChanged={(inputValue) => setImagem(inputValue)}
        />
        <List
          mandatory={true}
          label="Time"
          itens={props.teams}
          inputValue={time}
          toChanged={(inputValue) => setTime(inputValue)}
        />

        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
