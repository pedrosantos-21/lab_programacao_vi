import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import CalculatorScreen from './src/screens/calculadora';
import {Botao} from './src/components/botao';

const imagemFundo = require('./src/assets/imgs/background.png');

export default function App() {
  return (
    <ImageBackground source={imagemFundo} style={styles.background}>
      <View style={styles.container}>
         <Botao texto= 'Botão 1' onPress={() => console.log('Clicou 1')} />
         <Botao texto= 'Botão 2' onPress={() => console.log('Clicou 2')} cor="blue" />
         <Botao texto= 'Botão 3' onPress={() => console.log('Clicou 3')} cor ="#00ff22"/>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
