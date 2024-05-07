import { TextInput } from 'react-native-paper'
import { View,TouchableOpacity, Text, StyleSheet, Icon, MD3Colors, ScrollView, ScrollViewComponent } from 'react-native'
import { useState } from 'react'
import { Button, Avatar, Card } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';


const data = ['ID:','NOME:', 'CPF:', 'TELEFONE', 'EMAIL', 'PLACA DO VEICULO']


const HomeCliente = () => {
    const [form, setform] = useState({})

    const AddSalvar = () => (
        <Button icon="book-open"   
            style={{padding: 10, marginTop: 16, }} 
            mode="contained" 
            onPress={() => console.log('Pressed')}>Meus Dados
          
        </Button>
      );

      const AddCancelar = () => (
        <Button icon="cog"  
            style={{padding: 10, marginTop: 16, }} 
            mode="contained" 
            onPress={() => console.log('Pressed')}>Empresas Parceiras
          
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
            
            <AddSalvar/>
            <AddCancelar/>
            
            
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