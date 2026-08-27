import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { products } from '../data/products';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

function ProductDetailsScreen({ route }: Props) {
  const { productId } = route.params;
  const product = products.find(item => item.id === productId);

  // Hooks must run on EVERY render, so useState goes ABOVE the guard below.
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text style={styles.missing}>Product not found</Text>
      </View>
    );
  }

  function decreaseQuantity() {
    setQuantity(current => Math.max(1, current - 1));
  }

  function increaseQuantity() {
    setQuantity(current => current + 1);
  }

  function handleAddToCart() {
    Alert.alert('Added to cart', `${quantity} × ${product!.name}`);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.price}>₹{product.price}</Text>

      <View style={styles.metaRow}>
        <Text style={styles.rating}>★ {product.rating}</Text>
        <Text style={product.inStock ? styles.inStock : styles.outOfStock}>
          {product.inStock ? 'In stock' : 'Out of stock'}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{product.description}</Text>

      <View style={styles.quantityRow}>
        <Text style={styles.quantityLabel}>Quantity</Text>

        <View style={styles.stepper}>
          <Pressable style={styles.stepperButton} onPress={decreaseQuantity}>
            <Text style={styles.stepperButtonText}>−</Text>
          </Pressable>

          <Text style={styles.quantityValue}>{quantity}</Text>

          <Pressable style={styles.stepperButton} onPress={increaseQuantity}>
            <Text style={styles.stepperButtonText}>+</Text>
          </Pressable>
        </View>
      </View>

      <Pressable
        onPress={handleAddToCart}
        disabled={!product.inStock}
        style={({ pressed }) => [
          styles.addButton,
          !product.inStock && styles.addButtonDisabled,
          pressed && styles.addButtonPressed,
        ]}
      >
        <Text style={styles.addButtonText}>
          {product.inStock ? `Add ${quantity} to Cart` : 'Out of Stock'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  missing: {
    fontSize: 16,
    color: '#6B7280',
  },
  image: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
  },
  name: {
    marginTop: 16,
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  category: {
    marginTop: 4,
    fontSize: 14,
    color: '#6B7280',
  },
  price: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: '#B45309',
    marginRight: 16,
  },
  inStock: {
    fontSize: 14,
    fontWeight: '600',
    color: '#059669',
  },
  outOfStock: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DC2626',
  },
  sectionTitle: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  description: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  quantityLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
  },
  stepperButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  quantityValue: {
    minWidth: 32,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  addButton: {
    marginTop: 20,
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1A1A',
  },
  addButtonPressed: {
    opacity: 0.8,
  },
  addButtonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default ProductDetailsScreen;
