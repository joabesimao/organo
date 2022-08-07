import { Button } from "../Button";
import { List } from "../List";
import { TextField } from "../TextField";
import "./Form.css";

export const Form = (props) => {
  const team = [
    "Presidente",
    "Diretor Administrativo",
    "Diretor Comercial",
    "Gerente de Vendas",
    "Gerente de Operações",
    "Gerente de Marketing",
    "Vendedores",
    "Serviço Tecnico",
  ];
  const toSubmit = (event) => {
    event.preventDefault();
    console.log("form foi submetido");
  };
  return (
    <section className="style-form">
      <form onSubmit={toSubmit}>
        <h2>Preencha os dados para criar o card </h2>
        <TextField
          mandatory={true}
          label="Nome"
          placeholder="digite seu nome"
        />
        <TextField
          mandatory={true}
          label="Cargo"
          placeholder="digite seu cargo"
        />
        <TextField label="Imagem" placeholder="digite o endereço da imagem" />
        <List mandatory={true} itens={team} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
