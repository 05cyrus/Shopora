import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CartItem } from '../types/cart';
import type { Product } from '../types/product';

// Everything the cart exposes to the rest of the app.
type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  addToCart: (product: Product, quantity: number) => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(product: Product, quantity: number) {
    setItems(currentItems => {
      const existingItem = currentItems.find(
        item => item.product.id === product.id,
      );

      // Already in the cart? Increase its quantity instead of adding a duplicate row.
      if (existingItem) {
        return currentItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...currentItems, { product, quantity }];
    });
  }

  // Derived from items — not stored separately, so it can never disagree.
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const value = { items, totalItems, addToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook so screens write useCart() instead of useContext(CartContext).
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used inside a CartProvider');
  }

  return context;
}
