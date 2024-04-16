/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT e useState--------------*/
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch} from 'react-native';


/*PRECISA INSTALAR NO SERVER LOCAL

*/

export default function App(){

  const [status, setStatus] = useState(false);
  
  
  return(

      <View style={styles.container}>

      <Switch 
      style = {{marginRight: 50, marginTop: 40 }}
      value = {status}
      onValueChange={ (valorSelecionado) => setStatus(valorSelecionado)}
      trackColor={{ false: '#121212', true: '#00ff00'}}
      thumbColor={'gray'}
      />
      

      <Text style={{textAlign: 'center', fontSize: 25}}>
        Status: {status ? 'ATIVO': 'INATIVO'}</Text>
      
      </View>

   
      
   

  )
}

/*----------CREADOR DE ESTILOS--------------*/
const styles = StyleSheet.create({
container:{
  flex: 1,
  marginTop: 40,
  
},



});



//export default App;

