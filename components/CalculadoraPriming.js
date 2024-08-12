import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function CalculadoraPriming() {
  const [volumeCerveja, setVolumeCerveja] = useState('');
  const [temperatura, setTemperatura] = useState('');
  const [co2Dissolvido, setCo2Dissolvido] = useState(null);

  const calcularPriming = () => {
    const co2 = (parseFloat(volumeCerveja) * 2.4 / parseFloat(temperatura)).toFixed(2);
    setCo2Dissolvido(co2);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Calculadora de Priming e CO2 Dissolvido</Text>
      <TextInput
        placeholder="Volume da cerveja em litros"
        keyboardType="numeric"
        value={volumeCerveja}
        onChangeText={setVolumeCerveja}
        style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Temperatura em °C"
        keyboardType="numeric"
        value={temperatura}
        onChangeText={setTemperatura}
        style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button title="Calcular" onPress={calcularPriming} />
      {co2Dissolvido && (
        <Text style={{ marginTop: 20 }}>CO2 Dissolvido: {co2Dissolvido} volumes</Text>
      )}
    </View>
  );
}
