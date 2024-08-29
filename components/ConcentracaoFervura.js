import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ConcentracaoFervura() {
  const [gravidadeInicial, setGravidadeInicial] = useState('');
  const [volumeInicial, setVolumeInicial] = useState('');
  const [gravidadeDesejada, setGravidadeDesejada] = useState('');
  const [volumeFinal, setVolumeFinal] = useState(null);

  const calcularConcentracao = () => {
    const volFinal = (parseFloat(gravidadeInicial) * parseFloat(volumeInicial)) / parseFloat(gravidadeDesejada);
    setVolumeFinal(volFinal.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Concentração na Fervura</Text>
      <TextInput
        style={styles.input}
        placeholder="Gravidade inicial"
        keyboardType="numeric"
        value={gravidadeInicial}
        onChangeText={setGravidadeInicial}
      />
      <TextInput
        style={styles.input}
        placeholder="Volume inicial (L)"
        keyboardType="numeric"
        value={volumeInicial}
        onChangeText={setVolumeInicial}
      />
      <TextInput
        style={styles.input}
        placeholder="Gravidade desejada"
        keyboardType="numeric"
        value={gravidadeDesejada}
        onChangeText={setGravidadeDesejada}
      />
      <Button title="Calcular" onPress={calcularConcentracao} />
      {volumeFinal && (
        <Text style={styles.result}>Volume Final: {volumeFinal} L</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 22,
    textAlign: 'center',
    color: '#333',
  },
});
