import Nome from "./Components/Nome";
import { useState } from "react";

function App() {
const [input, setInput] = useState('')
const [tarefa, setTarefa] = useState('');

function handleRegister(e){
  e.preventDefault();
 
  alert('Usuário registrado!')
}

  return (
    <div>
      <form onSubmit={ handleRegister}>
        <label>Nome da Tarefa:</label><br/>
        <input 
        placeholder="Digite uma tarefa" 
       
       
        /><br/>

        

        <button type="submit">Registrar</button>
      </form>
      <br/><br/>

     
    </div>
   
  );
}

export default App;


