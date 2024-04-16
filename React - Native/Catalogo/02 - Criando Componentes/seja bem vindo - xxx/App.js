/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT e useState--------------*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, FlatList} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Pessoa from './src/Pessoa/Index.js';



export default function App(){
 
  const [feed, setFeed] = useState(
    [{id: '1', nome: 'Andre maia', cargo: 'Desen. Full Stack'}]
  
  );
  
  return(
 /*-----Precisa passar propriedades
        data={}
        renderItem={}
    -----*/
      <View style={styles.container}>
        <Text style={styles.textoTopo}>
          Seja bem vindo!
        </Text>
      <FlatList
        data={feed}
        renderItem={ ({ item }) =>  <Pessoa data={item}/>}
      />
      </View>

   
      
   

  )
}

/*----------CREADOR DE ESTILOS--------------*/
const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: '#fff',
},

textoTopo: {
  fontWeight: 'bold',
  margin: 50,
  marginBottom: 20,
  fontSize: 30,
  alignItems: 'center',
},


});



//export default App;

