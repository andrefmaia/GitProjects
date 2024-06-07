import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./../firebaseConnection";
import QRCode from "react-native-qrcode-svg";

const HomeCliente = ({ route }) => {
  const [pontos, setPontos] = useState(''); // Estado para armazenar o valor dos pontos
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchPontos() {
      const userId = route.params?.userId; // Identificador único do usuário passado por parâmetro

      if (userId) {
        try {
          const docRef = doc(db, "Cliente", userId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.pontos !== undefined) {
              setPontos(data.pontos); // Define o valor dos pontos no estado
            } else {
              Alert.alert("Campo 'pontos' não encontrado.");
            }
          } else {
            Alert.alert("Nenhum documento encontrado para o usuário atual.");
          }
        } catch (error) {
          Alert.alert("Erro ao buscar pontos:", error.message);
        }
      } else {
        Alert.alert("ID do usuário não fornecido.");
      }
    }

    fetchPontos(); // Chama a função para buscar os pontos quando o componente é montado
  }, [route.params?.userId]);

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16, marginTop: 50 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text> {route.params?.nome} </Text>
          
          <QRCode
            style={{ width: 500, height: 500 }}
            value={route.params?.nome}
          />
        </View>

        {/* Adicionei os botões */}
        <Button
          icon="book-open"
          style={{ padding: 10, marginTop: 16 }}
          mode="contained"
          onPress={() => navigation.navigate("ClientesEdit")}
        >
          Meus Dados
        </Button>
        <Button
          icon="cog"
          style={{ padding: 10, marginTop: 16 }}
          mode="contained"
          onPress={() => navigation.navigate("ClienteParceiros")}
        >
          Empresas Parceiras
        </Button>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Card>
            <Card.Content style={{ padding: 5, alignItems: "center" }}>
              <Text style={{ fontSize: 20, alignItems: "center" }}>
                Pontos Acumulados:
              </Text>
            </Card.Content>
            <Card.Content style={{ padding: 5, alignItems: "center", alignContent:"center" }}>
              <Text style={{ fontSize: 120, fontWeight: "bold"}}>
                {pontos} {route.params?.setPontos}
              </Text>    
            </Card.Content>
          </Card>
        </View>

        <Button
          icon="logout"
          style={{ padding: 10, marginTop: 16, backgroundColor: "#d00e0e" }}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Sair da Conta
        </Button>
      </View>
    </ScrollView>
  );
};

export default HomeCliente;
