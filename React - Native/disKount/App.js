import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

// importa as telas
import Login from "./src/pages/Login";
import Clientes from "./src/pages/Clientes";
import Fornecedores from "./src/pages/Fornecedores";
import HomeClientes from "./src/pages/HomeClientes";
import HomeFornecedores from "./src/pages/HomeFornecedores";
import ValidarCliente from "./src/pages/ValidarCliente";
import CapturarPontos from './src/pages/CapturarPontos';
import HistoricoValid from './src/pages/HistoricoValid';

const App = () => {
  return (
  

    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerShown: false,
          }}/>

          <Stack.Screen 
          name="HomeClientes" 
          component={HomeClientes}
          options={{
            title: '<Cliente>'
          }}/>

          <Stack.Screen 
          name="Cliente" 
          component={Clientes}
          options={{
            title: 'Meus Dados'
          }}
           />
                   
                   <Stack.Screen 
          name="Fornecedores" 
          component={Fornecedores}
          options={{
            title: 'Fornecedores'
          }}
           />
          
          <Stack.Screen 
          name="HomeFornecedores" 
          component={HomeFornecedores}
          options={{
            title: 'HomeFornecedores'
          }}
           />

          <Stack.Screen 
          name="ValidarCliente" 
          component={ValidarCliente}
          options={{
            title: 'Validar Cliente'
          }}
           />

          <Stack.Screen 
          name="CapturarPontos" 
          component={CapturarPontos}
          options={{
            title: 'Capturar Pontos'
          }}
           />    

           <Stack.Screen 
          name="HistoricoValid" 
          component={HistoricoValid}
          options={{
            title: 'Historico de Validação'
          }}
           />     
        
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App