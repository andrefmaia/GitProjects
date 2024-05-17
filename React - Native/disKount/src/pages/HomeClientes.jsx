import { TextInput } from 'react-native-paper'
import { View,TouchableOpacity, Text, StyleSheet, Icon, MD3Colors, ScrollView, ScrollViewComponent } from 'react-native'
import { useState } from 'react'
import { Button, Avatar, Card } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const data = ['ID:','NOME:', 'CPF:', 'TELEFONE', 'EMAIL', 'PLACA DO VEICULO']


const HomeCliente = () => {
    const [form, setform] = useState({})


    const navigation = useNavigation();
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

      const MeuAvatar = () => (
        <Avatar.Image size={150}  source={require('../img/avatar.png')} />
      );

    console.log(form)

    return (
        <ScrollView>
        <View style={{ flex: 1, padding: 16, marginTop: 10 }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <MeuAvatar />
            </View>
            
            <AddMeusDados/>
            <AddEmpresas/>
            
            
            <View style={{marginTop: 20}}>
            <Card >
            <Card.Content style={{ padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 20, alignItems: 'center' }}>Pontos Acumulados:</Text>
            </Card.Content>
            <Card.Content style={{padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 150, fontWeight: 'bold'}}>35</Text>
            </Card.Content>
            </Card>
            </View>
            
            
        </View>
        </ScrollView>
    )
}



export default HomeCliente