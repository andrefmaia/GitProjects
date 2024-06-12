import React, { useState, useEffect, } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { Button, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeFornecedor = ({ route }) => {
  const navigation = useNavigation();
  const [pontos, setPontos] = useState(''); // Estado para armazenar o valor da Logo
  const userId = route.params?.userId; // Identificador único do usuário passado por parâmetro


  const AddMeusDados = () => (
    <Button
      icon="book-open"
      style={{ padding: 10, marginTop: 16 }}
      mode="contained"
      onPress={() => navigation.navigate('FornecedoresEdit', { userId })}
    >
      Meus Dados
    </Button>
  );

  const AddHistorico = () => (
    <Button
      icon="text"
      style={{ padding: 10, marginTop: 16 }}
      mode="contained"
      onPress={() => navigation.navigate('HistoricoValid', { userId })}
    >
      Histórico de Clientes
    </Button>
  );

  const AddValidCli = () => (
    <Button
      icon="qrcode"
      style={{ padding: 10, marginTop: 16 }}
      mode="contained"
      onPress={() => navigation.navigate('ValidarCliente', { userId })}
    >
      Validar Cliente
    </Button>
  );

  const AddCapPontos = () => (
    <Button
      icon="cog"
      style={{ padding: 10, marginTop: 16 }}
      mode="contained"
      onPress={() => navigation.navigate('CapturarPontos', { userId })}
    >
      Capturar Pontos
    </Button>
  );

  const AddLogout = () => (
    <Button
      icon="logout"
      style={{ padding: 10, marginTop: 16, backgroundColor: '#d00e0e' }}
      mode="contained"
      onPress={() => navigation.navigate('Login')}
    >
      Sair da Conta
    </Button>
  );

  const MeuAvatar = () => (
    <Avatar.Image size={150} source={require('../img/avatar.png')} />
  );

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16, marginTop: 100 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>
            {route.params?.nome}
          </Text>
        
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <MeuAvatar />
        </View>
        <AddMeusDados />
        <AddHistorico />
        <AddValidCli />
        <AddCapPontos />
        <AddLogout />
      </View>
    </ScrollView>
  );
};

export default HomeFornecedor;
