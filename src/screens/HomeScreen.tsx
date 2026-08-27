import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopora</Text>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <ProductCard product={item} />}
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
});

export default HomeScreen;
