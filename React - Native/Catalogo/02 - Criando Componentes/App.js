/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT--------------*/
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/*----------ou 2º criar as classes ----<import React, {Component} from 'react'; 

class App extends Component{
  render(){
    return(
      <View>
        <Text>Ta saindo o primeiro App!</Text>
        <Text>Trabalho ta saindo do papel!</Text>
      </View>
    );
  }
}
>---*/

/*----------2º CRIAR AS FUNCTIONS----------- <View style={styles.container}>---*/
        function App() {
              /*----------CRIAÇÃO DE VARIAVEIS (ACIMA DO RETURN---*/
              let nome = 'André Maia';
              

          return (       
            <View>
              <Text style={{color:'red', fontSize: 25, margin: 15}}>Meu primeiroApp!</Text>
              <Text style={{color:'#121212', fontSize: 18, color: 'green'}}>Obrigado pelo seu primeiro Acesso!</Text>

             <Logo largura={150} altura={150} nome2 = 'Andre Feitosa Maia'/>
          

            </View>
          );
        }



/*----------estilos--------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

/*----------EXPORT DEFAULT--------------*/
export default App;

/*----------CRIANDO UM COMPONENTE NOVO--------------*/

function Logo(props){
  /*----------CRIAÇÃO DE VARIAVEIS (ACIMA DO RETURN---*/
  let img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png';

  return(
    <View>
    <Image source={{uri: img}} 
    style= {{width: props.largura, height: props.altura}}  />

    <Text>{ props.nome2}</Text>
    </View>
  )
}