import { FlatList, StyleSheet, Text, View } from 'react-native';
import { products } from '../data/products';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopora</Text>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#1A1A1A',
    marginRight: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
});

export default HomeScreen;
