import { Product } from '../types/product';

// Temporary mock catalog. Later this is replaced by data from a real API,
// but the Product shape stays the same — so screens won't need to change.

export const products: Product[] = [
  {
    id: '1',
    name: 'Wirelesss Headphones',
    description:
      'Over-ear headphones with active noise cancellation and 30-hour battery life.',
    price: 2499,
    image: 'https://picsum.photos/seed/headphones/400/400',
    category: 'Electronics',
    rating: 4.5,
    inStock: true,
  },
  {
    id: '2',
    name: 'Smart Watch',
    description:
      'Fitness tracking, heart rate monitoring, and notifications on your wrist.',
    price: 4999,
    image: 'https://picsum.photos/seed/smartwatch/400/400',
    category: 'Electronics',
    rating: 4.2,
    inStock: true,
  },
  {
    id: '3',
    name: 'Cotton T-Shirt',
    description: 'Soft 100% cotton t-shirt with a relaxed fit. Machine washable.',
    price: 799,
    image: 'https://picsum.photos/seed/tshirt/400/400',
    category: 'Clothing',
    rating: 4.0,
    inStock: true,
  },
  {
    id: '4',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with breathable mesh and cushioned sole.',
    price: 3299,
    image: 'https://picsum.photos/seed/shoes/400/400',
    category: 'Clothing',
    rating: 4.7,
    inStock: false,
  },
  {
    id: '5',
    name: 'Ceramic Coffee Mug',
    description: 'Handmade 350ml ceramic mug. Microwave and dishwasher safe.',
    price: 449,
    image: 'https://picsum.photos/seed/mug/400/400',
    category: 'Home',
    rating: 4.3,
    inStock: true,
  },
  {
    id: '6',
    name: 'Desk Lamp',
    description: 'Adjustable LED desk lamp with three brightness levels and USB port.',
    price: 1599,
    image: 'https://picsum.photos/seed/lamp/400/400',
    category: 'Home',
    rating: 4.1,
    inStock: true,
  },
];