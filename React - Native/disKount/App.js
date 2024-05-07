import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

// importa as telas
import Login from "./src/pages/Login";
import Clientes from "./src/pages/Clientes";
import Fornecedores from "./src/pages/Fornecedores";
import HomeClientes from "./src/pages/HomeClientes";

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="Fornecedores" component={Fornecedores} />
          <Stack.Screen name="Home Cliente" component={HomeClientes} />
          <Stack.Screen name="Clientes" component={Clientes} />
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App