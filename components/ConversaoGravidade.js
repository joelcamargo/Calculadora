import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ConversaoGravidade() {
  const [gravidade, setGravidade] = useState('');
  const [plato, setPlato] = useState(null);

  const converterGravidade = () => {
    const platoResult = ((parseFloat(gravidade) - 1) * 1000 / 4).toFixed(2);
    setPlato(platoResult);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Conversão de Gravidade para °Plato</Text>
      <TextInput
        placeholder="Digite a gravidade específica"
        keyboardType="numeric"
        value={gravidade}
        onChangeText={setGravidade}
        style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button title="Converter" onPress={converterGravidade} />
      {plato && (
        <Text style={{ marginTop: 20 }}>Resultado: {plato} °Plato</Text>
      )}
    </View>
  );
}
