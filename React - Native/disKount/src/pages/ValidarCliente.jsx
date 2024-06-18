import React from 'react';
import { TextInput, Avatar } from 'react-native-paper'
import { View,TouchableOpacity, StyleSheet, Icon, MD3Colors, ScrollView, ScrollViewComponent } from 'react-native'
import { useState } from 'react'
import { Button, Text,Card, Searchbar, IconButton} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';





const ValidCliente = () => {
      const [form, setform] = useState({});
      const navigation = useNavigation();
      
    

        const AddCapPontos = () => (
        <Button icon="send"  
            style={{padding: 10, marginTop: 16, borderRadius: 30}} 
            mode="outlined" 
            onPress={() => navigation.navigate('')}>Enviar Pontos
          
        </Button>
      );

      const MyPesquisar = () => {
        const [searchQuery, setSearchQuery] = React.useState('');
        return (
          <Searchbar
            style={{ marginBottom: 10 }}
            placeholder="Pesquisar"
            onChangeText={setSearchQuery}
            value={searchQuery}
            mode='bar'
          />
        );
      };


      const AddValidCli = () => (
        <Button
          icon="camera"
          style={{ padding: 10, marginTop: 16, borderRadius: 30}}
          mode="contained"
          onPress={() => navigation.navigate('ValidarCliente', { userId })}
        >
          Scanear QRCode
        </Button>
      );

     
     
     

      const MyPontos = () => {
        const [text, setText] = React.useState("");
      
        return (
          <TextInput
            label="1"
            value={text}
            mode="outlined"
            onChangeText={text => setText(text)}
          />
        );
      };

 

    return (
        <ScrollView>
        <View style={{ flex: 1, padding: 16, marginTop: 10 }}>
                        
              

              <View style={{marginBottom: 20}}>
              <AddValidCli />
              </View>

              <MyPesquisar/>

            <Card style={{marginTop: 10,marginBottom: 15,padding: 10}}>
                  <View style = {{marginTop: 10, padding: 20}}>
                       <Text variant="titleMedium">ANDRE FEITOSA MAIA</Text>
                      <Text variant="titleMedium">(85) 98805.8910)</Text>
                      <Text variant="titleMedium">andrefmaia@hotmail.com</Text>
                  </View>

                  <Card.Actions>
                  <Text variant="titleSmall" style={{marginRight: 5}}>Multiplique os Pontos X</Text>
                  <MyPontos/>
                  </Card.Actions>

                  <Card.Actions>
                  <Text variant="titleSmall" style={{marginRight: 5}}>Desconto:</Text>
                    <Text variant="displayLarge">8%</Text>
                  <Text variant="titleSmall" style={{marginRight: 5}}>Pontos:</Text>
                    <Text variant="displayLarge">5</Text>
                  </Card.Actions>

                                   
            </Card>

            
            <AddCapPontos/>
            
            
        </View>
        </ScrollView>
    )
}



export default ValidCliente