import { router } from 'expo-router';
import { Button, Text, View, StyleSheet } from 'react-native';

export default function Tela3() {
  return (
    <View style={styles.container}>
      <Text>Tela 3</Text>
      <Button title="Ir para Tela 1" onPress={() => router.push('/tela1')} />
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
