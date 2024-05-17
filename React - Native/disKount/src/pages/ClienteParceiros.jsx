import React from 'react';
import { TextInput, Avatar, DataTable, List, MD3Colors } from 'react-native-paper'
import { View,TouchableOpacity, StyleSheet, Icon, ScrollView, ScrollViewComponent } from 'react-native'
import { useState } from 'react'
import { Button, Text,Card, Searchbar, IconButton} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';




const CliParceiros = () => {
      const [form, setform] = useState({});
      const navigation = useNavigation();
      
    

        const AddCapPontos = () => (
        <Button icon="file"  
            style={{padding: 10, marginTop: 16, }} 
            mode="outlined" 
            size={20}
            onPress={() => navigation.navigate('')}>Abrir
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


  
     
     

 

    return (
        <ScrollView>
        <View style={{ flex: 1, padding: 16, marginTop: 10 }}>
                        
              
        <MyPesquisar/>
 
        <AddCapPontos/>
            
            
        </View>
        </ScrollView>
    )
}



export default CliParceiros