import React from "react";
import {
  TextInput,
  Avatar,
  DataTable,
  List,
  MD3Colors,
} from "react-native-paper";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Icon,
  ScrollView,
  ScrollViewComponent,
  FlatList,
  Image,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { Button, Text, Card, Searchbar, IconButton } from "react-native-paper";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "./../firebaseConnection";

const CliParceiros = () => {
  const [form, setform] = useState({});
  const navigation = useNavigation();

  const MyPesquisar = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    return (
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode="bar"
      />
    );
  };

  /* ---- CONSTRUÇÃO DO DATA TABLE----------->*/
  const [feed, setFeed] = useState([
    
  ]);

  const fetchFornecedores = async () => {
    try {
      const fornecedoresCollection = collection(db, "fornecedores");
      const fornecedoresSnapshot = await getDocs(fornecedoresCollection);
      const fornecedoresList = fornecedoresSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeed(fornecedoresList);
    } catch (error) {
      Alert.error("Erro ao buscar fornecedores: ", error);
    }
  };

  useEffect(() => {
    fetchFornecedores();
  }, []);

  function Parceiro(props) {
    return (
      <View style={styles.viewParceiro}>
        <View style={{ flex: 0.3, padding: 10 }}>
          <Avatar.Image size={75} source={require("../img/avatar.png")} />
        </View>

        <View style={{ flex: 1 }}>
          <Image source={props.data.logo} />
          <Text style={styles.textParceiro}>{props.data.nome}</Text>
          <Text style={styles.textParceiro}>{props.data.telefone}</Text>

          <TouchableOpacity>
            <Text style={{ color: "blue", fontStyle: "italic", fontSize: 18 }}>
              Endereço: {props.data.enderecoCompleto}
            </Text>
            <Text style={{ color: "blue", fontStyle: "italic", fontSize: 18 }}>
              CEP: {props.data.cep}
            </Text>
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
      fontWeight: "bold",
    },

    viewParceiro: {
      height: "auto",
      marginBottom: 1,
      padding: 10,
      borderRadius: 15,
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#dcd6d6",
      alignItems: "center"
    },
  });

  /* ---- FIM DO DATA TABLE----------->*/
  return (
    <View style={{ flex: 1, padding: 16, marginTop: 10 }}>
      <MyPesquisar />

      <View style={{ alignItems: "center" }}>
        <Text>Clique no parceiro para ir Maps</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={feed}
        renderItem={({ item }) => <Parceiro data={item} />}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default CliParceiros;
