/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT e useState--------------*/
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

function App(){
  
  return(
    <View style= {{flex: 1,backgroundColor: 'black'}}>
      <View style={{ height: 65, backgroundColor: '#121212'}}></View>
      <View style={{flex: 1, height: 50, backgroundColor: '#DDD'}}>
        <Text>Sou um Texto</Text>
      </View>
      <View style={{height: 65, backgroundColor: '#121212'}}></View>
    
    </View>

  )
}
/*----------TAMANHOS DINAMICOS COM FLEXBOX--------------*/


export default App;

