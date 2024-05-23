import { TextInput } from 'react-native-paper'
import { View,TouchableOpacity, Text, StyleSheet, Icon, MD3Colors, ScrollView, ScrollViewComponent } from 'react-native'
import { useState } from 'react'
import { Button, Avatar, Card } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const HomeFornecedor = () => {
    const [form, setform] = useState({})
    const navigation = useNavigation();

    const AddMeusDados = () => (
        <Button icon="book-open"   
            style={{padding: 10, marginTop: 16, }} 
            mode="contained" 
            onPress={() => navigation.navigate('Fornecedores')}>Meus Dados
          
        </Button>
      );

      const AddHistorico = () => (
        <Button icon="text"  
            style={{padding: 10, marginTop: 16, }} 
            mode="contained" 
            onPress={() => navigation.navigate('HistoricoValid')}>Histórico de Clientes
          
        </Button>
      );

      const AddValidCli = () => (
        <Button icon="qrcode"  
            style={{padding: 10, marginTop: 16, }} 
            mode="contained" 
            onPress={() => navigation.navigate('ValidarCliente')}>Validar Cliente
          
        </Button>
      );

      const AddCapPontos = () => (
        <Button icon="cog"  
            style={{padding: 10, marginTop: 16, }} 
            mode="contained" 
            onPress={() => navigation.navigate('CapturarPontos')}>Capturar Pontos
          
        </Button>
      );

      const AddLogout = () => (
        <Button icon="logout"  
            style={{padding: 10, marginTop: 16, backgroundColor: '#d00e0e' }} 
            mode="contained" 
            onPress={() => navigation.navigate('Login')}>Sair da Conta
          
        </Button>
      );

      const MeuAvatar = () => (
        <Avatar.Image size={150}  source={require('../img/avatar.png')} />
      );

   

    return (
        <ScrollView>
        <View style={{ flex: 1, padding: 16, marginTop: 100 }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <MeuAvatar />
            </View>
            
            <AddMeusDados/>
            <AddHistorico/>
            <AddValidCli/>
            <AddCapPontos/>
            <AddLogout/>
            
            
        </View>
        </ScrollView>
    )
}



export default HomeFornecedor