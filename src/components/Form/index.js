import { List } from "../List";
import { TextField } from "../TextField";
import "./Form.css";

export const Form = () => {
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
  return (
    <section className="style-form">
      <form>
        <h2>Preencha os dados para criar o card </h2>
        <TextField label="Nome" placeholder="digite seu nome" />
        <TextField label="Cargo" placeholder="digite seu cargo" />
        <TextField label="Imagem" placeholder="digite o endereço da imagem" />
        <List itens={team} />
      </form>
    </section>
  );
};
