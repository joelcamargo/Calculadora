import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ConversaoMassa() {
  const [libras, setLibras] = useState('');
  const [kilogramas, setKilogramas] = useState(null);

  const converterMassa = () => {
    const massa = parseFloat(libras) * 0.453592;
    setKilogramas(massa.toFixed(2));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Conversão de Libras para Kilogramas</Text>
      <TextInput
        placeholder="Digite o peso em Libras"
        keyboardType="numeric"
        value={libras}
        onChangeText={setLibras}
        style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button title="Converter" onPress={converterMassa} />
      {kilogramas && (
        <Text style={{ marginTop: 20 }}>Resultado: {kilogramas} kg</Text>
      )}
    </View>
  );
}
