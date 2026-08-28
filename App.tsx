import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import CalculatorScreen from './src/screens/calculadora';
import {Botao} from './src/components/botao';

const imagemFundo = require('./src/assets/imgs/background.png');

export default function App() {
  return (
    <ImageBackground source={imagemFundo} style={styles.background}>
      <View style={styles.container}>
         <Botao/>
         <Botao/>
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
