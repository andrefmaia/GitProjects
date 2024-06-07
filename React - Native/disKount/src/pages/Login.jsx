import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Image,
  ScrollView,
  Alert
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import logo from "../img/logo.png";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";

import { Button, Avatar, TextInput } from "react-native-paper";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "./../firebaseConnection";

//---------CONSTRUÇÃO DO TEXTINPUT USUARIO
const TxtUsuario = ({ value, onChangeText }) => {
  return (
    <TextInput
      mode="outlined"
      label="Nome de Usuário"
      placeholder="Digite seu usuário"
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

//---------CONSTRUÇÃO DOTEXT INPUT SENHA
const TxtSenha = ({ value, onChangeText }) => {
  return (
    <TextInput
      mode="outlined"
      label="Senha"
      placeholder="Digite sua senha"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry
      style={styles.input}
    />
  );
};

export default function Login() {
  const [status, setStatus] = useState(false); // Estado para o switch
  const [usuario, setUsuario] = useState(""); // Estado para o usuário
  const [senha, setSenha] = useState(""); // Estado para a senha
  const navigation = useNavigation(); // Obtém a instância de navegação

  const handleLogin = async () => {
    try {
      if (status) {
        const q = query(
          collection(db, "fornecedores"),
          where("usuario", "==", usuario),
          where("senha", "==", senha)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            navigation.navigate("HomeFornecedores", { nome: doc.data().nome });
          });
        } else {
          Alert.alert("Usuário ou senha incorretos");
        }
      } else {
        const q = query(
          collection(db, "Cliente"),
          where("usuario", "==", usuario),
          where("senha", "==", senha)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            navigation.navigate("HomeClientes", { nome: doc.data().nome });
          });
        } else {
          Alert.alert("Usuário ou senha incorretos");
        }
      }
    } catch (error) {
      Alert.error("Erro ao fazer login: ", error);
    }
  };

  //---------CONSTRUÇÃO DO BOTAO LOGIN
  const BtnLogin = () => (
    <Button
      icon="login"
      style={styles.button}
      mode="contained"
      onPress={handleLogin}
      // onPress={() =>
      //   navigation.navigate('HomeClientes', { nome: 'André Feitosa Maia' })
      // }
    >
      Login
    </Button>
  );

  const BtnLoginParceiros = () => (
    <Button
      icon="login"
      style={{ padding: 10, marginTop: 16 }}
      mode="contained"
      //onPress={() => navigation.navigate("HomeFornecedores")}
      onPress={handleLogin}
    >
      Login
    </Button>
  );




  // Função para lidar com o clique em "Esqueceu a Senha?"
  const handleEsqueceuSenha = () => {
    navigation.navigate("Fornecedores"); // Substitua 'EsqueceuSenha' pelo nome da sua tela
  };

  // Função para lidar com o clique em "Crie sua conta Aqui!"
  const handleCriarConta = () => {
    if (status) {
      navigation.navigate("Fornecedores"); // Substitua 'Fornecedor' pelo nome da sua tela
    } else {
      navigation.navigate("Clientes"); // Substitua 'Cliente' pelo nome da sua tela
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <View style={styles.logoTop}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View>
        <TxtUsuario value={usuario} onChangeText={setUsuario} />
        <TxtSenha value={senha} onChangeText={setSenha} />

        {status ? <BtnLoginParceiros /> : <BtnLogin />}

        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={handleCriarConta}
            style={styles.btnCadastro}
          >
            <Text style={styles.btnCadastro}>Crie sua conta Aqui!</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleEsqueceuSenha}
            style={styles.btnCadastro}
          >
            <Text style={styles.btnCadastro}>Esqueceu a Senha?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cabecalho}>
        <Text style={styles.txtFornecedor}>
          Fornecedor? {status ? "SIM" : "NÃO"}
        </Text>

        <Switch
          style={styles.swtFornecedor}
          value={status}
          onValueChange={(valorSelecionado) => setStatus(valorSelecionado)}
          trackColor={{ false: "#A9A9A9", true: "#00FF00" }}
          thumbColor={status ? "#000080" : "#e8e8e8"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },

  input: {
    marginTop: 16,
  },

  button: {
    padding: 10,
    marginTop: 16,
  },

  cabecalho: {
    flexDirection: "row",
    backgroundColor: "#F0F8FF",
    height: 70,
    marginTop: 20,
  },

  txtFornecedor: {
    paddingLeft: 20,
    color: "#11118c",
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
    marginTop: 10,
  },

  swtFornecedor: {
    padding: 5,
    marginLeft: 5,
    marginTop: 10,
  },

  logoTop: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    paddingLeft: 20,
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },

  btnCadastro: {
    paddingLeft: 4,
    marginTop: 5,
    color: "#11118c",
    fontSize: 20,
    // Alinhamento à esquerda
    textAlign: "left",
  },

  btnContainer: {
    alignItems: "center", // Centraliza os botões horizontalmente
  },
});
