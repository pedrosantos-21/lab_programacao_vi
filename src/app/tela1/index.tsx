import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Tela1() {
  return (
    <View style={styles.container}>
      <Text>Tela 1</Text>
      <Button
        title="Ir para Tela 2"
        onPress={() =>
          router.push({
            pathname: '/tela2',
            params: { nome: 'Pedro' },
          })
        }
      />
      <Button title="Voltar para Home" onPress={() => router.push('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
});