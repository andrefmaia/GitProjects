import Nome from "./Components/Nome";
import { useState } from "react";

function App() {
  const [ aluno, setAluno] = useState('André')

  function handleChangeName(nome){
      setAluno(nome)
   }

  return (
    <div>
      <h1 className="container">Bem vindo ao Payfood!</h1><br/>
      <h2>Olá: {aluno}</h2>
      <Nome aluno = "André" idade = {41}/><br/>
      <button onClick={ () => handleChangeName('André Feitosa o programador') }> 
        Mudar Nome
      </button>
    </div>
   
  );
}

export default App;


