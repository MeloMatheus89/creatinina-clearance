import "./App.css";
import { Form } from "./Components/Form/index.jsx";
import { InputField } from "./Components/InputField/index.jsx";
import { Label } from "./Components/label/index.jsx";

function App() {
  return (
    <>
      <p>Testando a aplicação</p>
      <Form>
        <Label htmlFor="sexo">
          Sexo:
          <InputField></InputField>
        </Label>
        <Label htmlFor="idade">
          Idade:
          <InputField type="text" placeholder="Digite a idade"></InputField>
        </Label>
        <Label htmlFor="creatinina-level">Creatinina:</Label>
      </Form>
    </>
  );
}

export default App;

/*
TO DO LIST: 
Corrigir de label para a tag que faz um campo do formulário agrupado. Não estou me lembrando do nome da tag agora. Lembrar de pesquisar isso.
Adicionar o botão;
Criar uma Seção para os resultados e confirmar com a Míriam se ela quer ou não os descritivos dos valores;
*/
