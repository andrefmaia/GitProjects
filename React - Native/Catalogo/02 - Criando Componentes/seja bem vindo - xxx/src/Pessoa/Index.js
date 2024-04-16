import React from "react";
import {View, Text, StyleSheet} from 'react-native';

function Pessoa(props){
    return(
      
      

        <View style={styles.areaPessoa}>
            <Text style={styles.textoPessoa}>Nome: {props.data.nome}</Text>
            <Text style={styles.textoPessoa}>Cargo: {props.data.cargo}</Text>
    
        </View>

    );
  }

  const styles = StyleSheet.create( {

    areaPessoa: {
        backgroundColor: '#00008b',
        height: 200,
        marginBottom: 15,
        justifyContent: 'center',
      },
      textoPessoa: {
          color: '#fff',
          fontSize: 25,
          marginLeft: 25,
          fontWeight: 'bold'
        }

      
  });

  export default Pessoa;