import type { Product } from './product';

// One line in the cart: which product, and how many.
export type CartItem = {
  product: Product;
  quantity: number;
};
