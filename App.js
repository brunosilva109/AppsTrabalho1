import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetalhesScreen from './src/screens/DetalhesScreen';
import CarrinhoScreen from './src/screens/CarrinhoScreen'; // IMPORTAÇÃO AQUI

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Detalhes" 
          component={DetalhesScreen} 
          options={{ headerShown: false }} 
        />
        {/* NOVA TELA ADICIONADA AQUI */}
        <Stack.Screen 
          name="Carrinho" 
          component={CarrinhoScreen} 
          options={{ 
            title: 'Sacola',
            headerStyle: { backgroundColor: '#0086ff' },
            headerTintColor: '#fff' // Deixa o título e a seta de voltar brancos igual ao original
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}