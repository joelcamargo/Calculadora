import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function CorrecaoDensimetro() {
  const [densidadeLida, setDensidadeLida] = useState('');
  const [temperatura, setTemperatura] = useState('');
  const [densidadeCorrigida, setDensidadeCorrigida] = useState(null);

  const corrigirDensimetro = () => {
    const densidade = (parseFloat(densidadeLida) * (1 + 0.001 * (parseFloat(temperatura) - 20))).toFixed(3);
    setDensidadeCorrigida(densidade);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Correção de Temperatura do Densímetro</Text>
      <TextInput
        placeholder="Densidade lida"
        keyboardType="numeric"
        value={densidadeLida}
        onChangeText={setDensidadeLida}
        style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Temperatura em °C"
        keyboardType="numeric"
        value={temperatura}
        onChangeText={setTemperatura}
        style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button title="Corrigir" onPress={corrigirDensimetro} />
      {densidadeCorrigida && (
        <Text style={{ marginTop: 20 }}>Densidade Corrigida: {densidadeCorrigida}</Text>
      )}
    </View>
  );
}
