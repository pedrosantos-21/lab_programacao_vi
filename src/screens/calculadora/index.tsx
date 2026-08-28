import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function CalculatorScreen() {

  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    console.log('Estado atualizado:', { valor1, valor2, resultado });
  }, [valor1, valor2, resultado]);

  function calcular() {
    const novoResultado = valor1 + valor2;

    console.log('Valor 1:', valor1);
    console.log('Valor 2:', valor2);
    console.log('Resultado:', novoResultado);

    setResultado(novoResultado);
  }

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <Text style={styles.texto}>Valor 1: </Text>
        <Text style={styles.texto}>Valor 2: </Text>
      </View>

      <View style={styles.linha}>
        <TextInput placeholder="Digite o valor 1" keyboardType="decimal-pad" onChangeText={valor => setValor1(+valor)} />
        <TextInput placeholder="Digite o valor 2" keyboardType="decimal-pad" onChangeText={valor => setValor2(+valor)} />
      </View>

      <Button title="Calcular" onPress={calcular} />

      {resultado && <View style={[styles.linha, {marginTop: 30}]}>
        <Text style={styles.texto}>Resultado: </Text>
        <Text style={styles.texto}>{resultado}</Text>
      </View>}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  texto: { fontSize: 16},
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    
  }
});
