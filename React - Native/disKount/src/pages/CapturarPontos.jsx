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
            
            placeholder="Pesquisar"
            onChangeText={setSearchQuery}
            value={searchQuery}
            mode='bar'
          />
        );
      };

     
      const BtnScanner = () => (
        <Avatar.Image size={150}  
        source={require('../img/qrcode.png')} />
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
                        
              

            
            <Card style={{marginTop: 10,marginBottom: 15,padding: 10}}>
              
              <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 15}}>
            <BtnScanner />  
            </View>

            <MyPesquisar/>
              <Card.Content style = {{marginTop: 15}}>

                  <Text variant="titleMedium">ID:XXXX</Text>
                  <Text variant="titleMedium">CLIENTE:XXXXXXXXXXXXXXXXX</Text>
                  <Text variant="titleMedium">TELEFONE:XXXXXXXXXXXXXXXXX</Text>
                  <Text variant="titleMedium">EMAIL:XXXXXXXXXXXXXXXXX</Text>
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