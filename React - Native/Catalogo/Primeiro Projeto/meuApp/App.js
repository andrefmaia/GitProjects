/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT e useState--------------*/
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function App(){
  /*----------usando --> USE STATE--------------*/
   /*----passar dois parametros dentro de const[estado, função] = useState();--------------*/
  const [nome, setNome] = useState('André Maia');

  const [idade, setIdade] = useState(41);

function entrar(nome, idade){
  setNome (nome);
  setIdade (idade);
}

  return(
    <View style = {{marginTop: 30}}>
      <Button  title='Mudar Nome' onPress={ () => entrar('Eu sou Eng de Dados!', 42)}/>
      
      <Text style = {{fontSize: 19}}>{nome}</Text>
      <Text style = {{fontSize: 17}}>{idade}</Text>

    </View>
  )
}


/*----------MUDANÇA DE ESTADO (HOOK --> USE STATE--------------*/
export default App;