import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ConversaoVolume() {
  const [litros, setLitros] = useState('');
  const [galoes, setGaloes] = useState(null);

  const converterVolume = () => {
    const vol = parseFloat(litros) * 0.264172;
    setGaloes(vol.toFixed(2));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Conversão de Litros para Galões</Text>
      <TextInput
        placeholder="Digite o volume em Litros"
        keyboardType="numeric"
        value={litros}
        onChangeText={setLitros}
        style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button title="Converter" onPress={converterVolume} />
      {galoes && (
        <Text style={{ marginTop: 20 }}>Resultado: {galoes} galões</Text>
      )}
    </View>
  );
}
