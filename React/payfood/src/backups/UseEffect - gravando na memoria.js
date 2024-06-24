import Nome from "./Components/Nome";
import { useState, useEffect } from "react";

function App() {
const [input, setInput] = useState('')
const [tarefas, setTarefas] = useState([
    'Pagar a conta Nubank',
    'Estudar React'  
]);


useEffect( ()=>{
  const tarefasStorage = localStorage.getItem('@tarefa');

  if (tarefasStorage){
    setTarefas(JSON.parse(tarefasStorage))
  }

  return () => {
    //desmontar
  }

}, []);



useEffect(() =>{
  localStorage.setItem('@tarefa', JSON.stringify(tarefas) )
}, [tarefas]);



function handleRegister(e){
  e.preventDefault();

  setTarefas([...tarefas, input]);
  setInput('');
};

  return (
    <div>
      <form onSubmit={ handleRegister}>
        <label>Nome da Tarefa:</label><br/>
        <input 
        placeholder="Digite uma tarefa" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
       
        /><br/><br/>

          <button type="submit">Registrar</button>
      </form>
      
      <br/><br/>

      <ul>
          {tarefas.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
          ))}
      </ul>
        
        
      </div>
        
        

    
   
  );
}

export default App;


