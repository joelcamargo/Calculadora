import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CorrecaoOGFermentavel() {
  const [ogAtual, setOgAtual] = useState('');
  const [ogDesejada, setOgDesejada] = useState('');
  const [volume, setVolume] = useState('');
  const [quantidadeFermentavel, setQuantidadeFermentavel] = useState(null);

  const calcularCorrecao = () => {
    const quantidade = ((parseFloat(ogDesejada) - parseFloat(ogAtual)) * parseFloat(volume) * 1000) / 386;
    setQuantidadeFermentavel(quantidade.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Correção da OG com Fermentável</Text>
      <TextInput
        style={styles.input}
        placeholder="OG Atual"
        keyboardType="numeric"
        value={ogAtual}
        onChangeText={setOgAtual}
      />
      <TextInput
        style={styles.input}
        placeholder="OG Desejada"
        keyboardType="numeric"
        value={ogDesejada}
        onChangeText={setOgDesejada}
      />
      <TextInput
        style={styles.input}
        placeholder="Volume (L)"
        keyboardType="numeric"
        value={volume}
        onChangeText={setVolume}
      />
      <Button title="Calcular" onPress={calcularCorrecao} />
      {quantidadeFermentavel && (
        <Text style={styles.result}>Quantidade de Fermentável: {quantidadeFermentavel} g</Text>
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
