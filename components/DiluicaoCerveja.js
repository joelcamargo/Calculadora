import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function DiluicaoCerveja() {
  const [abvInicial, setAbvInicial] = useState('');
  const [fg, setFg] = useState('');
  const [volumeInicial, setVolumeInicial] = useState('');
  const [volumeFinal, setVolumeFinal] = useState(null);

  const calcularDiluição = () => {
    const volFinal = (parseFloat(volumeInicial) * parseFloat(abvInicial)) / (parseFloat(fg) * 100);
    setVolumeFinal(volFinal.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diluição da Cerveja Final</Text>
      <TextInput
        style={styles.input}
        placeholder="ABV inicial (%)"
        keyboardType="numeric"
        value={abvInicial}
        onChangeText={setAbvInicial}
      />
      <TextInput
        style={styles.input}
        placeholder="FG (SG)"
        keyboardType="numeric"
        value={fg}
        onChangeText={setFg}
      />
      <TextInput
        style={styles.input}
        placeholder="Volume inicial (L)"
        keyboardType="numeric"
        value={volumeInicial}
        onChangeText={setVolumeInicial}
      />
      <Button title="Calcular" onPress={calcularDiluição} />
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
