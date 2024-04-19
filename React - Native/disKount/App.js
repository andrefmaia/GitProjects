import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput,Switch, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/AntDesign';

export default function App() {
  const [status, setStatus] = useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
      
      <Switch 
      style = {styles.swtFornecedor}
      value = {status}
      onValueChange={ (valorSelecionado) => setStatus(valorSelecionado)}
      trackColor={{ false: '#A9A9A9', true: '#00FF00'}}
      thumbColor={'#000080'}
      />

      <Text style={styles.txtFornecedor}>Fornecedor?</Text>
      

      </View>

      <View style={styles.bodyCorpo}>
                <View style={styles.logoTop}>
                <Image 
                source={require('./src/img/logo.png')}
                style={styles.logo}
                />
             
                </View>

          <TextInput style={styles.inputUser}
          placeholder='Nome de Usuário'
          /*----------PEGANDO O TEXTO DIGITADO--------------*/
          //onChangeText={ () => {}}
          />

          <TextInput style={styles.inputUser}
          placeholder='Digite sua senha'
          /*----------PEGANDO O TEXTO DIGITADO--------------*/
          //onChangeText={ () => {}}
          />

          
          <TouchableOpacity style={styles.btnLogin}>
            <FontAwesome 
            name='user'
            size={30}
            color='#fff'
            />
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.btnEsqueceuSenha}>Esqueceu a Senha?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
    
  },

  cabecalho: {
    flexDirection: 'row',
    backgroundColor: '#F0F8FF'

  },

  txtFornecedor:{
    paddingLeft: 20,
    color: '#11118c',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 40
  },

  swtFornecedor: {
    padding: 5,
    marginLeft: 5,
    marginTop: 40
  },

  bodyCorpo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  logoTop: {
    marginTop: -180,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
  inputUser: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 45,
    borderWidth: 1,
    margin: 10,
    fontSize: 20,
    width: 300,
    borderRadius: 8,
  },

  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#11118c',
    borderRadius: 8,
    flexDirection: 'row',
    width: 300

  },

  btnText: {
    paddingLeft: 20,
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',

  },

  btnEsqueceuSenha: {
    paddingLeft: 20,
    color: '#11118c',
    fontSize: 20,
  }
});