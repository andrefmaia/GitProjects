import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Switch, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import logo from  '../img/logo.png'

import { Button, Avatar, TextInput } from 'react-native-paper';

export default function Login() {
  const [status, setStatus] = useState(false);
  const Stack = createStackNavigator();

  //---------CONSTRUÇÃO DO TEXTINPUT USUARIO
  const TxtUsuario = () => {
    const [text, setText] = React.useState('');
   
    return (
      <TextInput
        mode="outlined"
        label="Nome de Usuário"
       
        placeholder="Digite seu usuário"
        right={<TextInput.Icon icon= "walk" />}
      />
    );
  };

  //---------CONSTRUÇÃO DOTEXT INPUT SENHA

  const TxtSenha = () => {
    const [text, setText] = React.useState('');
   
    return (
      <TextInput
        mode="outlined"
        label="Senha"
        
        placeholder="Digite sua senha"

        
        right={<TextInput.Icon icon="eye" />}
      />
    );
  };

  //---------CONSTRUÇÃO DO BOTAO LOGIN

      const BtnLogin = () => (
        <Button icon="login"  
            style={{padding: 10, marginTop: 16, }} 
            mode="contained" 
            onPress={() => console.log('Pressed')}>Login
          
        </Button>
      );

  return (
      
          <View style={{flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            padding: 10
            }}>

          
              
                    <View style={styles.logoTop}>
                    <Image 
                    source={logo}
                    style={styles.logo}
                    />
                
                    </View>

                 
              <View>
              <TxtUsuario style={{alignItems: 'center', marginTop: 20}}/>
              <TxtSenha style={{alignItems: 'center', marginTop: 20}} />
              <BtnLogin/>
              <Text style={styles.btnCadastro}>Crie sua conta Aqui!</Text>
              <Text style={styles.btnCadastro}>Esqueceu a Senha?</Text>
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
  cabecalho: {
    flexDirection: 'row',
    backgroundColor: '#F0F8FF',
    height: 70,
    marginTop: 20
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

   logoTop: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
  

  

  btnText: {
    paddingLeft: 20,
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',

  },

  btnCadastro: {
    paddingLeft: 20,
    marginTop: 10,
    
    color: '#11118c',
    fontSize: 20,
  },

 
});
