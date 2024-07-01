import React from 'react';
import { TextInput, Avatar } from 'react-native-paper'
import { View,TouchableOpacity, StyleSheet, Icon, MD3Colors, ScrollView, ScrollViewComponent } from 'react-native'
import { useState } from 'react'
import { Button, Text,Card, Searchbar, IconButton} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';




const CapPontos = () => {
      const [form, setform] = useState({});
      const navigation = useNavigation();
      
    

        const AddCapPontos = () => (
        <Button icon="inbox"  
            style={{padding: 10, marginTop: 16, }} 
            mode="outlined" 
            size={20}
            onPress={() => navigation.navigate('')}>Capturar Pontos
        </Button>
      );

      const MyPesquisar = () => {
        const [searchQuery, setSearchQuery] = React.useState('');
        return (
          <Searchbar
            style={{marginTop: 10, marginBottom: 10}}
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
          style={{ padding: 10, marginTop: 16, marginBottom: 10, borderRadius: 30}}
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
             <MyPesquisar/>            
            <AddValidCli />

           
            
            <Card style={{marginTop: 10,marginBottom: 15,padding: 10}}>
              
            

            
              <Card.Content style={{marginBottom: 10,padding: 10}}>
                  <View style = {{marginTop: 10, padding: 20}}>
                       <Text variant="titleMedium">ANDRE FEITOSA MAIA</Text>
                      <Text variant="titleMedium">(85) 98805.8910)</Text>
                      <Text variant="titleMedium">andrefmaia@hotmail.com</Text>
                  </View>
                  </Card.Content>

                  <Card.Actions>
                  <Text variant="titleSmall" style={{marginRight: 5}}>Digite os Pontos a ser capturado: </Text>
                  <MyPontos/>
                  </Card.Actions>


                                   
            </Card>

            
            <AddCapPontos/>
            
            
        </View>
        </ScrollView>
    )
}



export default CapPontos