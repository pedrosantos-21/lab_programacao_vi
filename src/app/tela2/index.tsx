import { router, useLocalSearchParams } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Tela2() {
  const { nome } = useLocalSearchParams<{ nome?: string }>();

  return (
    <View style={styles.container}>
      <Text>Nome: {nome ?? 'Sem nome'}</Text>
      <Button
        title="Ir para Tela 3"
        onPress={() => router.push('/tela3')}
      />
      <Button
        title="Voltar para Home"
        onPress={() => router.push('/')}
      />
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
