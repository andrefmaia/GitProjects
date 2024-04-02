/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT e useState--------------*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity} from 'react-native';


function App(){

  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase,setTextFrase] = useState('')

  let frases = [
      'E conhecereis a verdade, e a verdade vos libertará. João 8:32 ',
      'Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam. Salmos 23:4',
      'Clamarei ao Deus altíssimo, ao Deus que por mim tudo faz. Salmos 57: 2',
      'Provérbios 9:10 diz: “O temor de Senhor é o princípio da sabedoria”. ',
      'Porque para Deus nada será impossível. Lucas 1:37',
      'Não ameis o mundo, nem o que há no mundo. Se alguém ama o mundo, o amor do Pai não está nele. 1 João 2:15',
      'Disse-lhe Jesus: Porque me viste, creste? Bem-aventurados os que não viram e creram. João 20:29 '
  ];

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextFrase('"'+frases[numeroAleatorio]+'"');
    setImg(require('./src/biscoitoAberto.png'));
  };

  function btnReiniciar(){
    setTextFrase('');
    setImg(require('./src/biscoito.png'));
  }
 
  return(
   <View style={styles.container}>
    
      <Image
      /*----------ACESSANDO A IMAGEM DENTRO DA PASTA DO PROJETO--------------*/
        source={img}
        style = {styles.img}
      />

      <Text style= {styles.textofrase}> {textoFrase}</Text>

      <TouchableOpacity style={styles.botao}   onPress={ quebraBiscoito }>
        <View style = {styles.btnArea}>
          <Text style ={styles.btnTexto} >Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]}   onPress={btnReiniciar}>
          <View style = {styles.btnArea}>
            <Text style ={[styles.btnTexto, {color: '#121212'}  ]} >Reiniciar Biscoito</Text>
          </View>
        </TouchableOpacity>
   </View>

  )
}

/*----------CREADOR DE ESTILOS--------------*/
const styles = StyleSheet.create({

container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},

img: {
  width: 180,
  height: 180,
},

textofrase: {
  fontSize: 20,
  color: '#dd7b22',
  margin: 30,
  fontStyle: 'italic',
  textAlign: 'center'
},

botao: {
  width: 230,
  height: 50,
  borderColor: '#dd7b22',
  borderWidth: 2,
  borderRadius: 25
},

btnArea: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},

btnTexto: {
  fontSize: 17,
  fontWeight: 'bold',
  color: '#dd7b22'
}

  
})

export default App;

