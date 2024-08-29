import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ConversaoGravidade() {
  const [brix, setBrix] = useState('');
  const [sd, setSd] = useState(null);

  const converterBrixParaSd = () => {
    const sdValue = parseFloat(brix) * 10; // Aproximação comum para Brix para g/L SD
    setSd(sdValue.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversão de Brix para g/L de SD</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor em Brix"
        keyboardType="numeric"
        value={brix}
        onChangeText={setBrix}
      />
      <Button  title="Converter" onPress={converterBrixParaSd}/>
      {sd && (
        <Text style={styles.result}>Resultado: {sd} g/L de SD</Text>
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
