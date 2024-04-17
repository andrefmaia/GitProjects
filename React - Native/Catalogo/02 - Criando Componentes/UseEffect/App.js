/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT e useState--------------*/
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';



/*PRECISA INSTALAR NO SERVER LOCAL

*/

export default function App(){

  const [contador, setContador] = useState(0);
  const [renderizado, setRenderizado] = useState(true);

  useEffect(() => {

      console.log('montou')

    

  }, [contador]);
  
  return(

      <View style={styles.container}>

          <Button title="Aumentar" onPress={ () => setContador(contador + 1)} />
          <Text style={{ fontSize: 30 }} >{contador}</Text>
          <Button title="Diminuir" onPress={ () => setContador(contador - 1)} />
          
          <Button title='Mostrar Nome' onPress={ () => setRenderizado(false)} />
          {renderizado && <Nome />}
      
      </View>

   
      
   

  );
}

/*----------CREADOR DE ESTILOS--------------*/
const styles = StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
  
},
});

function Nome(){
  useEffect (() => {
    console.log('Componente Nome foi montado na Tela')

    return () => console.log('Componente desmontado!')
  }, []);
  return <Text>Andre</Text>
}
