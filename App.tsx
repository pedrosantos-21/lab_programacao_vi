import React, {useState, useCallback} from 'react';
import { ImageBackground, StyleSheet, View, TextInput, Text } from 'react-native';
import {Botao} from './src/components/botao';

export default function App() {

    const [valor, setValor] = useState('');

    const handleBotao = useCallback(() => {
      console.log('Clicou 1')
    }, [])

  return (
      <View style={styles.container}>
         <TextInput placeholder='digite aqui um valor' onChangeText={setValor}/>
         <Text>{valor}</Text>
         <Botao texto= 'Botão 1' onPress={handleBotao}/>
         <Botao texto= 'Botão 2' onPress={handleBotao} cor="blue" />
         <Botao texto= 'Botão 3' onPress={handleBotao} cor ="#00ff22"/>
      </View>
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
