import { View, Text, StyleSheet, ScrollView } from 'react-native';

const pedidos = [
  { cliente: 'Maria', item: 'Brownie de nutella', status: 'Em preparo', valor: 'R$ 48,00' },
  { cliente: 'Rafael', item: 'Cupcake de morango', status: 'Pronto', valor: 'R$ 33,00' },
  { cliente: 'Laura', item: 'Cookie de chocolate', status: 'A caminho', valor: 'R$ 29,00' },
];

export default function PedidosTab() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Pedidos</Text>
      <Text style={styles.subtitle}>Acompanhe a produção em tempo real</Text>

      {pedidos.map((pedido) => (
        <View key={pedido.cliente} style={styles.card}>
          <View>
            <Text style={styles.cliente}>{pedido.cliente}</Text>
            <Text style={styles.item}>{pedido.item}</Text>
          </View>

          <View style={styles.rightSide}>
            <Text style={styles.valor}>{pedido.valor}</Text>
            <Text style={styles.status}>{pedido.status}</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  cliente: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2d1e1b',
  },
  item: {
    marginTop: 6,
    fontSize: 13,
    color: '#7d5d53',
  },
  rightSide: {
    alignItems: 'flex-end',
  },
  valor: {
    fontSize: 16,
    fontWeight: '800',
    color: '#d96f3d',
  },
  status: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '700',
    color: '#5d7f49',
  },
});
