/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT e useState--------------*/
import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider'

/*PRECISA INSTALAR NO SERVER LOCAL
npm install @react-native-community/slider'
*/

export default function App(){

  const [valor, setValor] = useState(50);
  
  
  return(

      <View style={styles.container}>

      <Slider
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor='#000fff'
        maximumTrackTintColor='#ff0000'
        thumbTintColor='#ff0000'
        value={valor}
        onValueChange={  (valorSelecionado) => setValor(valorSelecionado)}
      ></Slider>

      <Text style={{textAlign: 'center', fontSize: 25}}>valor: {valor.toFixed(0)}</Text>
      
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

