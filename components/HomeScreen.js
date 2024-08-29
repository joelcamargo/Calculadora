import React from 'react';
import { View, Button, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('ConversaoTemperatura')}
            >
                <Text style={styles.buttonText}>CONVERSÃO DE TEMPERATURA</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('ConversaoVolume')}
            >
                <Text style={styles.buttonText}>CONVERSÃO DE VOLUME</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('ConversaoMassa')}
            >
                <Text style={styles.buttonText}>CONVERSÃO DE MASSA</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('CorrecaoRefatometro')}
            >
                <Text style={styles.buttonText}>CORREÇÃO DE REFATÔMETRO</Text>
            </Pressable>
            
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('CalculadoraPriming')}
            >
                <Text style={styles.buttonText}>CALCULADORA DE PRIMING</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('CorrecaoDensimetro')}
            >
                <Text style={styles.buttonText}>CORREÇÃO DE DENSIMETRO</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('ConversaoGravidade')}
            >
                <Text style={styles.buttonText}>CONVERSÃO DE GRAVIDADE</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('DiluicaoCerveja')}
            >
                <Text style={styles.buttonText}>DILUIÇÃO DA CERVEJA</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('ConcentracaoFervura')}
            >
                <Text style={styles.buttonText}>CONCENTRAÇÃO NA FERVURA</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('CorrecaoOGFermentavel')}
            >
                <Text style={styles.buttonText}>CORREÇÃO DA OG COM FERMENTÁVEL</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'beige',
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 20,
        border: '2px solid #f56a06',
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
        width: 300
    },
    buttonText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
});
