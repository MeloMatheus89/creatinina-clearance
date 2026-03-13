import { useState } from "react";
import "./App.css";
import { EmptyState } from "./Components/Empty-state/index.jsx";
import { Form } from "./Components/Form/index.jsx";
import { InputField } from "./Components/InputField/index.jsx";
import { Label } from "./Components/label/index.jsx";
import { Results } from "./Components/Results/index.jsx";
import { Button } from "./Components/Button/index.jsx";

function App() {
  const [result, setResult] = useState(null);
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [creatinine, setCreatinine] = useState("");

  const handleChange = (event) => {
    setSex(event.target.value);
    console.log(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
    console.log(event.target.value);
  };

  const handleCreatinineChange = (event) => {
    setCreatinine(event.target.value);
    console.log(event.target.value);
  };

  function handleCalculate() {
    const ageNum = parseFloat(age);
    const weightNum = parseFloat(weight);
    const creatinineNum = parseFloat(creatinine);

    if (isNaN(ageNum) || isNaN(weightNum) || isNaN(creatinineNum)) {
      alert("Favor preencher os valores corretamente.");
      return;
    }

    let clearance = ((140 - ageNum) * weightNum) / (creatinineNum * 72);

    if (sex === "female") {
      clearance *= 0.85;
    }

    setResult(clearance);
  }

  return (
    <>
      <p>Testando a aplicação</p>
      <Form>
        <fieldset required>
          <Label htmlFor="sexo">
            Sexo:
            <InputField type="radio" value="female" checked={sex === "female"} onChange={handleChange}></InputField>
            Feminino
          </Label>
          <Label>
            <InputField type="radio" value="male" checked={sex === "male"} onChange={handleChange}></InputField> Masculino
          </Label>
        </fieldset>
        <fieldset required>
          <Label htmlFor="age">
            Idade:
            <InputField type="text" placeholder="Digite a idade" id="age" onChange={handleAgeChange}></InputField>
          </Label>
        </fieldset>
        <fieldset required>
          <Label htmlFor="weight">
            Peso:
            <InputField type="text" placeholder="Digite o peso em Kg" id="weight" onChange={handleWeightChange}></InputField>
          </Label>
        </fieldset>
        <fieldset required>
          <Label htmlFor="creatinina-level" id="level">
            Creatinina:
          </Label>
          <InputField type="text" placeholder="Digite o nível de creatinina do exame" onChange={handleCreatinineChange}></InputField>
        </fieldset>
        <Button type="button" onClick={handleCalculate}>
          Calcular agora
        </Button>
      </Form>
      {!result && <EmptyState />}
      {result && <Results result={result} />}
    </>
  );
}

export default App;

/*
TO DO LIST: 
Adicionar o botão;
Criar uma Seção para os resultados e confirmar com a Míriam se ela quer ou não os descritivos dos valores;
*/
