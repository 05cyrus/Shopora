import { Image, StyleSheet, Text, View } from 'react-native';
import { Product } from '../types/product';

// The props this component accepts. Anyone using ProductCard
// must pass exactly one thing: a product.
type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <Text style={styles.category}>{product.category}</Text>

        <View style={styles.bottomRow}>
          <Text style={styles.price}>₹{product.price}</Text>
          {!product.inStock && <Text style={styles.outOfStock}>Out of stock</Text>}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 10,
    marginBottom: 12,
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  category: {
    marginTop: 2,
    fontSize: 13,
    color: '#6B7280',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  outOfStock: {
    fontSize: 12,
    fontWeight: '600',
    color: '#DC2626',
  },
});

export default ProductCard;
