import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function CorrecaoRefatometro() {
  const [gravidadeLida, setGravidadeLida] = useState('');
  const [gravidadeReal, setGravidadeReal] = useState(null);

  const corrigirRefatometro = () => {
    const correcao = (parseFloat(gravidadeLida) / 1.04).toFixed(3);
    setGravidadeReal(correcao);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Correção de Refatômetro</Text>
      <TextInput
        placeholder="Digite a gravidade lida"
        keyboardType="numeric"
        value={gravidadeLida}
        onChangeText={setGravidadeLida}
        style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button title="Corrigir" onPress={corrigirRefatometro} />
      {gravidadeReal && (
        <Text style={{ marginTop: 20 }}>Gravidade corrigida: {gravidadeReal}</Text>
      )}
    </View>
  );
}
