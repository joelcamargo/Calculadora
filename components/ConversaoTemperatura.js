import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ConversaoTemperatura() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState(null);

  const converterTemperatura = () => {
    const temp = (parseFloat(celsius) * 9/5) + 32;
    setFahrenheit(temp.toFixed(2));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Conversão de Celsius para Fahrenheit</Text>
      <TextInput
        placeholder="Digite a temperatura em Celsius"
        keyboardType="numeric"
        value={celsius}
        onChangeText={setCelsius}
        style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button title="Converter" onPress={converterTemperatura} />
      {fahrenheit && (
        <Text style={{ marginTop: 20 }}>Resultado: {fahrenheit} °F</Text>
      )}
    </View>
  );
}
