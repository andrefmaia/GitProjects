import { View,TouchableOpacity, Text, StyleSheet, Icon, MD3Colors, ScrollView, ScrollViewComponent, Image } from 'react-native'
import { useState } from 'react'
import { Button, Avatar, Card, Title } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg'

const data = ['ID:','NOME:', 'CPF:', 'TELEFONE', 'EMAIL', 'PLACA DO VEICULO']


const HomeCliente = ( { route }) => {
    const [form, setform] = useState({})


    const navigation = useNavigation();
    
    /*navigation.setOptions ({
      title: `Olá ${route.params?.nome}`
    })*/

    const AddMeusDados = () => (
        <Button icon="book-open"   
            style={{padding: 10, marginTop: 16, }} 
            mode="contained" 
            onPress={() => navigation.navigate('Cliente')}>Meus Dados
          
        </Button>
      );

      const AddEmpresas = () => (
        <Button icon="cog"  
            style={{padding: 10, marginTop: 16, }} 
            mode="contained" 
            onPress={() => navigation.navigate('ClienteParceiros')}>Empresas Parceiras
          
        </Button>
      );

      const AddLogout = () => (
        <Button icon="logout"  
            style={{padding: 10, marginTop: 16, backgroundColor: '#d00e0e' }} 
            mode="contained" 
            onPress={() => navigation.navigate('Login')}>Sair da Conta
          
        </Button>
      );

      

    console.log(form)

    return (
        <ScrollView>
        <View style={{ flex: 1, padding: 16, marginTop: 100 }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text> {route.params?.nome} </Text>
           
            <QRCode
                style = {{width: 500, height: 500}}
                value={route.params?.nome}
              />
            </View>
            
            <AddMeusDados/>
            <AddEmpresas/>
            
            
            <View style={{marginTop: 20}}>
            <Card >
            <Card.Content style={{ padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 20, alignItems: 'center' }}>Pontos Acumulados:</Text>
            </Card.Content>
            <Card.Content style={{padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 120, fontWeight: 'bold'}}>35</Text>
            </Card.Content>
            </Card>
            </View>
            
            <AddLogout/>
        </View>
        </ScrollView>
    )
}



export default HomeCliente