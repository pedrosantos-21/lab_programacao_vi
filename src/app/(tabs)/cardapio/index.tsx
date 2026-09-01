import { View, Text, StyleSheet, ScrollView } from 'react-native';

const produtos = [
  { nome: 'Brownie Tradicional', preco: 'R$ 22,00', tempo: '15 min' },
  { nome: 'Bombom de Morango', preco: 'R$ 18,00', tempo: '10 min' },
  { nome: 'Cookie de Chocolate', preco: 'R$ 20,00', tempo: '12 min' },
  { nome: 'Cupcake de Baunilha', preco: 'R$ 16,00', tempo: '8 min' },
];

export default function CardapioTab() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Cardápio</Text>
      <Text style={styles.subtitle}>Seleção especial da semana</Text>

      {produtos.map((item) => (
        <View key={item.nome} style={styles.card}>
          <View style={styles.imagePlaceholder} />
          <View style={styles.cardContent}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.meta}>Tempo de preparo: {item.tempo}</Text>
            <View style={styles.footer}>
              <Text style={styles.preco}>{item.preco}</Text>
              <Text style={styles.pill}>Disponível</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf6',
  },
  content: {
    padding: 24,
    paddingTop: 52,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2a1b1a',
  },
  subtitle: {
    marginTop: 8,
    color: '#785c53',
    fontSize: 14,
    marginBottom: 18,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  imagePlaceholder: {
    width: 100,
    backgroundColor: '#f6d7c2',
  },
  cardContent: {
    flex: 1,
    padding: 16,
  },
  nome: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2a1b1a',
  },
  meta: {
    marginTop: 8,
    color: '#7d5c51',
    fontSize: 12,
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  preco: {
    fontSize: 18,
    fontWeight: '800',
    color: '#d96f3d',
  },
  pill: {
    backgroundColor: '#f3ebd6',
    color: '#7a6224',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});
