import { StyleSheet, Text, View } from 'react-native';
import { products } from '../data/products';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopora</Text>
      <Text style={styles.subtitle}>{products.length} products available</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#6B7280',
  },
});

export default HomeScreen;
