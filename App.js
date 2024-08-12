import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ConversaoTemperatura from './components/ConversaoTemperatura';
import ConversaoVolume from './components/ConversaoVolume';
import ConversaoMassa from './components/ConversaoMassa';
import CorrecaoRefatometro from './components/CorrecaoRefatometro';
import CalculadoraPriming from './components/CalculadoraPriming';
import CorrecaoDensimetro from './components/CorrecaoDensimetro';
import ConversaoGravidade from './components/ConversaoGravidade';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Calculadora de Conversões' }} />
        <Stack.Screen name="ConversaoTemperatura" component={ConversaoTemperatura} options={{ title: 'Conversão de Temperatura' }} />
        <Stack.Screen name="ConversaoVolume" component={ConversaoVolume} options={{ title: 'Conversão de Volume' }} />
        <Stack.Screen name="ConversaoMassa" component={ConversaoMassa} options={{ title: 'Conversão de Massa' }} />
        <Stack.Screen name="CorrecaoRefatometro" component={CorrecaoRefatometro} options={{ title: 'Correção de Refatômetro' }} />
        <Stack.Screen name="CalculadoraPriming" component={CalculadoraPriming} options={{ title: 'Calculadora de Priming' }} />
        <Stack.Screen name="CorrecaoDensimetro" component={CorrecaoDensimetro} options={{ title: 'Correção de Densímetro' }} />
        <Stack.Screen name="ConversaoGravidade" component={ConversaoGravidade} options={{ title: 'Conversão de Gravidade' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
