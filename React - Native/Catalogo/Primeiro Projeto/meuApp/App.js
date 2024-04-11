/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT e useState--------------*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, FlatList} from 'react-native';
import {Picker} from '@react-native-community/picker';

/*PRECISA INSTALAR NO SERVER LOCAL
npm install @react-native-picker/picker
*/

export default function App(){
  const [carroSelecionado, setCarroSelecionado] = useState(0);
  
  return(

      <View style={styles.container}>





        <Picker 
        selectedValue={carroSelecionado}
        onValueChange={(itemValue, itemIndex) => setCarroSelecionado(itemValue)}
      >
        <Picker.item key={0} value={0} label='Golf 1.6'/>
        <Picker.item key={1} value={1} label='Saveiro 1.6'/>
        <Picker.item key={2} value={2} label='Gol 2.0'/>

      
      </Picker>
      
      </View>

   
      
   

  )
}

/*----------CREADOR DE ESTILOS--------------*/
const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: '#fff',
  marginBottom: 50,
},



});



//export default App;

