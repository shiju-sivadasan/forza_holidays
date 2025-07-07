import { Product, Review, Special } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Signature Strawberry Rose Cake',
    description: 'Our most beloved creation featuring layers of vanilla sponge, fresh strawberry compote, and delicate rose buttercream.',
    price: 45.00,
    category: 'cakes',
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
    allergens: ['eggs', 'dairy', 'gluten'],
    variants: {
      sizes: ['6 inch', '8 inch', '10 inch'],
      flavors: ['Strawberry Rose', 'Vanilla Rose', 'Lemon Rose']
    },
    featured: true,
    popular: true
  },
  {
    id: '2',
    name: 'Artisan Sourdough Loaf',
    description: 'Traditional sourdough with a perfect crust and tender crumb, fermented for 24 hours for complex flavor.',
    price: 8.50,
    category: 'bread',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    allergens: ['gluten'],
    popular: true
  },
  {
    id: '3',
    name: 'French Butter Croissants',
    description: 'Flaky, buttery croissants made with premium French butter and traditional lamination techniques.',
    price: 4.25,
    category: 'croissants',
    image: 'https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg',
    allergens: ['eggs', 'dairy', 'gluten'],
    variants: {
      flavors: ['Plain', 'Almond', 'Chocolate', 'Ham & Cheese']
    },
    popular: true
  },
  {
    id: '4',
    name: 'Lavender Honey Cupcakes',
    description: 'Delicate vanilla cupcakes infused with lavender and topped with honey buttercream and candied flowers.',
    price: 5.75,
    category: 'cupcakes',
    image: 'https://images.pexels.com/photos/1998633/pexels-photo-1998633.jpeg',
    allergens: ['eggs', 'dairy', 'gluten'],
    variants: {
      flavors: ['Lavender Honey', 'Lemon Lavender', 'Vanilla Lavender']
    },
    featured: true
  },
  {
    id: '5',
    name: 'Chocolate Chip Cookies',
    description: 'Classic cookies with premium dark chocolate chunks, crispy edges and chewy centers.',
    price: 3.25,
    category: 'cookies',
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
    allergens: ['eggs', 'dairy', 'gluten'],
    variants: {
      flavors: ['Classic', 'Double Chocolate', 'Oatmeal Raisin', 'White Chocolate Macadamia']
    }
  },
  {
    id: '6',
    name: 'Seasonal Pumpkin Spice Tart',
    description: 'Autumn-inspired tart with spiced pumpkin filling, gingersnap crust, and cinnamon whipped cream.',
    price: 28.00,
    category: 'seasonal',
    image: 'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg',
    allergens: ['eggs', 'dairy', 'gluten', 'nuts'],
    featured: true
  },
  {
    id: '7',
    name: 'Danish Pastries',
    description: 'Buttery, flaky pastries with your choice of seasonal fruit fillings or cream cheese.',
    price: 4.50,
    category: 'pastries',
    image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg',
    allergens: ['eggs', 'dairy', 'gluten'],
    variants: {
      flavors: ['Apple Cinnamon', 'Cherry', 'Cream Cheese', 'Blueberry']
    }
  },
  {
    id: '8',
    name: 'Multigrain Sandwich Bread',
    description: 'Hearty, nutritious bread with seeds and grains, perfect for sandwiches or toast.',
    price: 6.75,
    category: 'bread',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    allergens: ['gluten'],
    variants: {
      flavors: ['Original', 'Extra Seedy', 'Whole Wheat']
    }
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'The Strawberry Rose Cake was absolutely divine! Perfect for my daughter\'s birthday party. Everyone asked where we got it!',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 5,
    comment: 'Best sourdough in the city! The crust is perfect and the flavor is incredible. I drive 20 minutes just to get this bread.',
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    rating: 5,
    comment: 'SweetBloom catered my wedding and it was magical! The dessert table was gorgeous and everything tasted amazing.',
    date: '2024-01-08',
    image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg'
  },
  {
    id: '4',
    name: 'David Thompson',
    rating: 4,
    comment: 'Love the croissants! Flaky, buttery, just like in France. The staff is also incredibly friendly.',
    date: '2024-01-05'
  }
];

export const specials: Special[] = [
  {
    id: '1',
    title: 'Valentine\'s Day Special',
    description: 'Heart-shaped red velvet cakes and rose-themed desserts. Perfect for your special someone!',
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
    validUntil: '2024-02-14',
    discount: 15,
    promoCode: 'LOVE2024'
  },
  {
    id: '2',
    title: 'Weekend Brunch Box',
    description: 'Assorted pastries, croissants, and mini quiches perfect for weekend gatherings.',
    image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg',
    validUntil: '2024-02-29',
    discount: 20,
    promoCode: 'BRUNCH20'
  },
  {
    id: '3',
    title: 'Corporate Catering',
    description: 'Special rates for office events, meetings, and corporate celebrations.',
    image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg',
    validUntil: '2024-12-31',
    discount: 10,
    promoCode: 'CORPORATE10'
  }
];