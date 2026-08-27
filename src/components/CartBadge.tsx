import { StyleSheet, Text, View } from 'react-native';
import { useCart } from '../context/CartContext';

function CartBadge() {
  const { totalItems } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🛒</Text>

      {totalItems > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{totalItems}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
  },
  icon: {
    fontSize: 22,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -6,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DC2626',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default CartBadge;
