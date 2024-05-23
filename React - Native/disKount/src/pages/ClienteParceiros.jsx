import React from 'react';
import { TextInput, Avatar, DataTable, List, MD3Colors } from 'react-native-paper'
import { View,TouchableOpacity, StyleSheet, Icon, ScrollView, ScrollViewComponent, FlatList, Image } from 'react-native'
import { useState } from 'react'
import { Button, Text,Card, Searchbar, IconButton} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';




const CliParceiros = () => {
      const [form, setform] = useState({});
      const navigation = useNavigation();
      
    

       

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

      /* ---- CONSTRUÇÃO DO DATA TABLE----------->*/
      const [feed, setFeed] = useState([
          {id: '1',nome: 'Posto Shell', telefone: '(85)98805.8910', endereco: 'Rua consel vieira da silva, 555 - Parquelandia', desconto: 5, pontos: 5, logo: ''},
          {id: '2',nome: 'Rocha Auto Center',telefone: '(85)98805.8910', endereco: 'Rua consel vieira da silva, 555 - Parquelandia', desconto: 5, pontos: 10, logo: ''},
          {id: '3',nome: 'Arnóbio Car', telefone: '(85)98805.8910', endereco: 'Rua consel vieira da silva, 555 - Parquelandia',desconto: 5, pontos: 10, mapa: '',logo: ''},
          {id: '4',nome: 'Kolares Eletricar', telefone: '(85)98805.8910', endereco: 'Rua consel vieira da silva, 555 - Parquelandia',desconto: 5, pontos: 10, logo: ''},
          {id: '5',nome: 'Lava Jato Elite Car', telefone: '(85)98805.8910', endereco: 'Rua consel vieira da silva, 555 - Parquelandia', desconto: 5, pontos: 15, logo: ''}
      ]);
     
      

      function Parceiro(props){
        return(
          
          
          <View style={styles.viewParceiro}>
            <View style = {{flex: 0.1, padding: 10}}>
            <Avatar.Image size={25}  source={require('../img/avatar.png')} />
            </View>

            <View style ={{flex: 1}}>
            <Image source={props.data.logo}/>
            <Text style={styles.textParceiro}>{props.data.nome}</Text>
            <Text style={styles.textParceiro}>{props.data.telefone}</Text>

            <TouchableOpacity >
            <Text style ={{color: 'blue', fontStyle: 'italic', fontSize: 18,}}>Endereço: {props.data.endereco}</Text>
            </TouchableOpacity>

            <Text>Pontos: {props.data.pontos}</Text>
            <Text>Desconto: {props.data.desconto}%</Text>
            </View>
          </View>
          
        );
      }

      const styles = StyleSheet.create({
        textParceiro: {
          fontSize: 20,
          fontWeight: 'bold'
        },

        viewParceiro: {
          height: 'auto', 
          marginBottom: 1, 
          padding: 10,
          borderRadius: 15,
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#dcd6d6'
          
        }

      })
    

 
    /* ---- FIM DO DATA TABLE----------->*/
    return (
        
        <View style={{ flex: 1, padding: 16, marginTop: 10 }}>
        
        <MyPesquisar/>

        <View style = {{alignItems: 'center'}}>
        <Text>Clique no parceiro para ir Maps</Text>
        </View>
        <FlatList 
        showsVerticalScrollIndicator={false}
        data = {feed}
        renderItem={ ({ item }) => <Parceiro data={item}/>}
        style = {{marginTop: 10}}
        />
      
            
            
        </View>
    )
}

 

export default CliParceiros