import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput,Switch, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

export default function App() {
  const [status, setStatus] = useState(false);
  const Stack = createStackNavigator();

  return (
          <View style={styles.container}>
          
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

              <Text style={styles.btnCadastro}>Crie sua conta Aqui!</Text>
              <Text style={styles.btnEsqueceuSenha}>Esqueceu a Senha?</Text>
          </View>


          <View style={styles.cabecalho}>
          
          <Text style={styles.txtFornecedor}>Fornecedor?</Text>
          
          <Switch 
          style = {styles.swtFornecedor}
          value = {status}
          onValueChange={ (valorSelecionado) => setStatus(valorSelecionado)}
          trackColor={{ false: '#A9A9A9', true: '#00FF00'}}
          thumbColor={'#000080'}
          />

          
          

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
    backgroundColor: '#F0F8FF',
    height: 70

  },

  txtFornecedor:{
    paddingLeft: 20,
    color: '#11118c',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 10
  },

  swtFornecedor: {
    padding: 5,
    marginLeft: 5,
    marginTop: 10
  },

  bodyCorpo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  logoTop: {
    marginTop: 20,
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
    margin: 8,
    fontSize: 20,
    width: 300,
    borderRadius: 8,
  },

  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 8,
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

  btnCadastro: {
    paddingLeft: 20,
    color: '#11118c',
    fontSize: 20,
  },

  btnEsqueceuSenha: {
    paddingLeft: 20,
    color: '#11118c',
    fontSize: 20,
  },

});
