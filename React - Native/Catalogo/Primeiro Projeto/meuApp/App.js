import React from "react";
import { View, Text, StyleSheet, TextInput} from 'react-native';

export default function App(){

return(
      <View style={styles.container}>
            
            <Text style={styles.texto}>'Testando'</Text>

      </View>

);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
  },

   texto: {
    textAlign: 'center',
    fontSize: 25
  }
})
