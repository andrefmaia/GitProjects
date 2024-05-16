import { TextInput } from 'react-native-paper'
import { View, TouchableOpacity, Text, StyleSheet, Icon, MD3Colors, ScrollView, ScrollViewComponent } from 'react-native'
import { useState } from 'react'
import { Button, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

//---------import de paginas
import Login from './Login';

const data = ['ID:','NOME:', 'CNPJ:', 'TELEFONE', 'EMAIL', 'PONTOS: ', 'DESCONTO:',  'Google Maps:']


const Fornecedor = () => {
    const [form, setform] = useState({})

    console.log(form)

   
        const navigation = useNavigation();
        const AddSalvar = () => (
            <Button icon="post"  
                style={{padding: 10, marginTop: 16, }} 
                mode="contained" 
                onPress={() => navigation.navigate('login')}>Salvar
            
            </Button>
        
        );

      const AddDesconto = () => (
        <Button icon="qrcode"  
            style={{padding: 10, marginTop: 16, }} 
            mode="contained" 
            onPress={() => console.log('Pressed')}>Gerar Pontos e Descontos
          
        </Button>
        
      );

      const MeuLogo = () => (
        <Avatar.Image size={150}  source={require('../img/avatar.png')} />
      );

    return (


        <ScrollView>

        

        <View style={{ flex: 1, padding: 16
        }}>

            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <MeuLogo/>
            </View>

            {data.map((el, ix) => 
                <TextInput 
                    label={el} 
                    key={ix} 
                    style={{marginTop: 16}}
                    onChangeText={text => setform({...form, [el]: text})}
                />)
            }

               
        
                <AddSalvar/>

                <AddDesconto/>
        </View>

        </ScrollView>
       
    )
}





export default Fornecedor



