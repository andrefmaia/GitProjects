import { TextInput } from 'react-native-paper'
import { View,TouchableOpacity, Text, StyleSheet, Icon, MD3Colors, ScrollView, ScrollViewComponent } from 'react-native'
import { useState } from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const data = ['ID:','NOME:', 'CPF:', 'TELEFONE', 'EMAIL', 'PLACA DO VEICULO']


const Cliente = () => {
    const [form, setform] = useState({})

    const AddSalvar = () => (
        <Button icon="post"  
            style={{padding: 10, marginTop: 16, }} 
            mode="contained" 
            onPress={() => console.log('Pressed')}>Salvar
          
        </Button>
      );

      const navigation = useNavigation();
      const AddCancelar = () => (
        <Button icon="cancel"  
            style={{padding: 10, marginTop: 16, }} 
            mode="contained" 
            onPress={ () => navigation.goBack()}>Cancelar
          
        </Button>
      );

    console.log(form)

    return (
        <ScrollView>
        <View style={{ flex: 1, padding: 16 }}>
            {data.map((el, ix) => 
                <TextInput 
                    label={el} 
                    key={ix} 
                    style={{marginTop: 16}}
                    onChangeText={text => setform({...form, [el]: text})}
                />)
            }
            
            <AddSalvar/>
            <AddCancelar/>
        </View>
        </ScrollView>
    )
}

export default Cliente