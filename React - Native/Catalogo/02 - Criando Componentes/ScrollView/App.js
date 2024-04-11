/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT e useState--------------*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView} from 'react-native';



export default function App(){
 
  
  return(

    /*<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>*/
    <View style={styles.container}>
     
      
      
      <ScrollView>
          <View style={styles.box1}>
          <Text>Testando Literalmente
            </Text></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
          <View style={styles.box2}></View>


      </ScrollView>



    </View>

  )
}

/*----------CREADOR DE ESTILOS--------------*/
const styles = StyleSheet.create({

container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFF'
},

box1: {
  height: 250,
  backgroundColor: 'red'
},

box2: {
  height: 250,
  backgroundColor: 'green'
},

box3: {
  height: 250,
  backgroundColor: 'yellow'
},

box4: {
 
  height: 250,
  backgroundColor: 'blue'
},

  
})

//export default App;

