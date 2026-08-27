import { Product } from '../types/product';

// Temporary mock catalog. Later this is replaced by data from a real API,
// but the Product shape stays the same — so screens won't need to change.

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description:
      'Over-ear headphones with active noise cancellation and 30-hour battery life.',
    price: 2499,
    image: 'https://m.media-amazon.com/images/I/51AUH6BYehL._SX522_.jpg',
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
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/f2607/gallery/in-galaxy-watch9-l345-sm-l345fzkains-553764126?$1164_776_PNG$',
    category: 'Electronics',
    rating: 4.2,
    inStock: true,
  },
  {
    id: '3',
    name: 'Cotton T-Shirt',
    description: 'Soft 100% cotton t-shirt with a relaxed fit. Machine washable.',
    price: 799,
    image: 'https://image.hm.com/assets/hm/28/e2/28e2cb154d12eb524528d18e5f8c67c28350f62c.jpg?imwidth=2160',
    category: 'Clothing',
    rating: 4.0,
    inStock: true,
  },
  {
    id: '4',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with breathable mesh and cushioned sole.',
    price: 3299,
    image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/d/ad22b92Nike-HV9272-200_1.jpg?rnd=20200526195200&tr=w-1080',
    category: 'Clothing',
    rating: 4.7,
    inStock: false,
  },
  {
    id: '5',
    name: 'Ceramic Coffee Mug',
    description: 'Handmade 350ml ceramic mug. Microwave and dishwasher safe.',
    price: 449,
    image: 'https://image.hm.com/assets/hm/4e/ab/4eab9a916336122365971fe747ee3ee868445260.jpg?imwidth=2160',
    category: 'Home',
    rating: 4.3,
    inStock: true,
  },
  {
    id: '6',
    name: 'Desk Lamp',
    description: 'Adjustable LED desk lamp with three brightness levels and USB port.',
    price: 1599,
    image: 'https://www.nestlume.com/cdn/shop/files/RedPaperMesh2_f5a7d2cd-f7c9-453f-8001-fd8bfe9da60f.png?v=1769252897&width=713',
    category: 'Home',
    rating: 4.1,
    inStock: true,
  },
];