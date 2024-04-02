/*----------1º IMPORTAR O REACT E OS PACOTES DO REACT e useState--------------*/
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

function App(){
  
 /*----------Propriedade FlexDirection--------------
 flexDirection: 'row'  ---
 flexDirection: 'column' ||
 flexDirection: 'column-reverse'
 ----ALINHAMENTOS  -- MEXER NA LINHA
 justifyContend: 'flex-start' (Default)
 justifyContent: 'center'
 justifyContend: 'flex-end'
 justifyContend: 'space-between'
 justifyContend: 'space-around'
 ----ALINHAMENTOS  -- MEXER NA COLUNA
 alignItems: 'center'
 alignItems: 'flex-start'
 alignItems: 'center'
 .
 .
 .
 */
  return(
    <View style= {{
      flex: 1, 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center'}}>


      <View style={{ height: 50, width: 50, backgroundColor: '#121212'}}></View>
      <View style={{ height: 50, width: 50, backgroundColor: 'red'}}></View>
      <View style={{ height: 50, width: 50, backgroundColor: 'green'}}></View>
      <View style={{ height: 50, width: 50, backgroundColor: 'blue'}}></View>
    
    </View>

  )
}
/*----------TAMANHOS DINAMICOS COM FLEXBOX e ALINHAMENTOS COM FLEXDIRECTION--------------*/


export default App;

