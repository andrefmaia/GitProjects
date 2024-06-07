import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../firebaseConnection";


const ClienteEdit = () => {
  const [form, setForm] = useState({
    id: "",
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    placaVeiculo: "",
    usuario: "",
    senha: "",
  });
  const navigation = useNavigation();

//----->>>> ERRROOOO! PRECISA BUSCAR O CLIENTE PARA FAZER A EDIÇÃO DOS DADOS
  const handleSave = async () => {
    try {
      await updateDoc(collection(db, "Cliente"), form.id);
      Alert.alert("Cliente editado com sucesso!", form.nome);
      navigation.goBack();
    } catch (error) {
      Alert.error("Erro ao adicionar cliente: ", error);
    }
  };

  const AddSalvar = () => (
    <Button
      icon="post"
      style={styles.button}
      mode="contained"
      onPress={handleSave}
    >
      Salvar
    </Button>
  );

  const AddCancelar = () => (
    <Button
      icon="cancel"
      style={styles.button}
      mode="contained"
      onPress={() => navigation.goBack()}
    >
      Cancelar
    </Button>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
      <TextInput
          label="USUÁRIO"
          placeholder="Digite seu usuário"
          value={form.usuario}
          onChangeText={(text) => setForm({ ...form, usuario: text })}
          style={styles.input}
        />

        <TextInput
          label="SENHA"
          placeholder="Digite sua senha"
          secureTextEntry
          value={form.senha}
          onChangeText={(text) => setForm({ ...form, senha: text })}
          style={styles.input}
        />

        <TextInput
          label="NOME COMPLETO"
          placeholder="Digite seu nome"
          autoCapitalize="characters"
          value={form.nome}
          onChangeText={(text) => setForm({ ...form, nome: text })}
          style={styles.input}
        />
        <TextInput
          label="CPF"
          keyboardType="numeric"
          placeholder="Digite seu CPF"
          value={form.cpf}
          onChangeText={(text) => setForm({ ...form, cpf: text })}
          style={styles.input}
        />
        <TextInput
          label="TELEFONE"
          placeholder="Digite seu telefone com DDD"
          value={form.telefone}
          onChangeText={(text) => setForm({ ...form, telefone: text })}
          style={styles.input}
        />
        <TextInput
          label="EMAIL"
          placeholder="Digite seu email"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
          keyboardType="email-address"
          style={styles.input}
          autoCapitalize="none"

        />
        <TextInput
          label="PLACA DO VEÍCULO"
          placeholder="Digite a placa do veículo"
          value={form.placaVeiculo}
          onChangeText={(text) => setForm({ ...form, placaVeiculo: text })}
          style={styles.input}
          autoCapitalize="characters"
        />
        
        
        <AddSalvar />
        <AddCancelar />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  clienteContainer: {
    marginBottom: 16,
  },
  input: {
    marginTop: 16,
  },
  button: {
    padding: 10,
    marginTop: 16,
  },
});

export default ClienteEdit;
