/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT e useState--------------*/
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

function App(){
  
  return(
    <View style = {styles.area}>
      <Text style = {[styles.titulo, styles.textoAlinhado]}>Andre Maia</Text>
      <Text style = {styles.titulo}>Engenheiro de Dados</Text>
      <Text style = {[styles.subtitulo,styles.textoAlinhado]}>Pós graduando..</Text>
    </View>
  )
}

/*----------APLICANDO GRUPOS DE ESTILO--------------*/
const styles = StyleSheet.create({
  area: {
    marginTop: 50
  },
  titulo:{
    fontSize: 20,
    color: '#FF0000'
  },
  subtitulo:{
    fontSize: 17,
    color: '#000000',
    marginTop: 16
  },
  textoAlinhado:{
    textAlign: 'center'
  }

});

export default App;

