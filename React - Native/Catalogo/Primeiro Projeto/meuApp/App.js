/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT e useState--------------*/
import React, { useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';



/*PRECISA INSTALAR NO SERVER LOCAL

*/

export default function App(){

  return(

      <View style={styles.container}>

        <View style={styles.topMenu}>

        <Text style = {styles.nome}>Home</Text>

        </View>


      </View>

   
      
   

  );
}

/*----------CREADOR DE ESTILOS--------------*/
const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems: 'center',
  marginTop: 35,  
  backgroundColor: '#f4f4f4'
},

topMenu: {

  backgroundColor: '#182864',
  width: '100%'

},

input: {
  width: 300,
  height: 40,
  borderColor: '#000',
  borderWidth: 1,
  padding: 10,

},

botao: {
  backgroundColor: '#222',
  color: '#fff',
  height: 40,
  padding: 10,
  marginLeft: 4
},

nome: {
 
  fontSize: 30,
  fontWeight: 'bold',
  color: '#fff',
  padding: 40
  
}

});
