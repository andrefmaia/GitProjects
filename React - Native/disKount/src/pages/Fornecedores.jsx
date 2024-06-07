import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button, Avatar, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../firebaseConnection";

const data = [
  { label: "NOME", name: "nome" },
  { label: "CNPJ", name: "cnpj" },
  { label: "ENDEREÇO COMPLETO", name: "enderecoCompleto" },
  { label: "CEP", name: "cep" },
  { label: "TELEFONE", name: "telefone" },
  { label: "E-MAIL", name: "email" },
  { label: "PONTOS", name: "pontos" },
  { label: "DESCONTO", name: "desconto" },
  { label: "GOOGLE MAPS", name: "googleMaps" },
  { label: "USUÁRIO", name: "usuario" },
];

const Fornecedor = () => {
  const [form, setform] = useState({
    senha: "",
  });
  const navigation = useNavigation();

  const handleSave = async () => {
    try {
      await addDoc(collection(db, "fornecedores"), form);
      console.log("Fornecedor adicionado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao adicionar fornecedor: ", error);
    }
  };

  const AddSalvar = () => (
    <Button
      icon="post"
      style={{ padding: 10, marginTop: 16 }}
      mode="contained"
      onPress={handleSave}
    >
      Salvar
    </Button>
  );

  const AddDesconto = () => (
    <Button
      icon="qrcode"
      style={{ padding: 10, marginTop: 16 }}
      mode="contained"
      onPress={() => console.log("Pressed")}
    >
      Gerar Pontos e Descontos
    </Button>
  );

  const MeuLogo = () => (
    <TouchableOpacity>
      <Avatar.Image size={150} source={require("../img/avatar.png")} />
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <MeuLogo />
        </View>
        {data.map((el, ix) => (
          <TextInput
            label={el.label}
            key={ix}
            style={{ marginTop: 16 }}
            onChangeText={(text) => setform({ ...form, [el.name]: text })}
          />
        ))}

        <TextInput
          label="SENHA"
          placeholder="Digite sua senha"
          secureTextEntry
          value={form.senha}
          onChangeText={(text) => setform({ ...form, senha: text })}
          style={styles.input}
        />
        <AddSalvar />
        <AddDesconto />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginTop: 16,
  },
  button: {
    padding: 10,
    marginTop: 16,
  },
});

export default Fornecedor;
