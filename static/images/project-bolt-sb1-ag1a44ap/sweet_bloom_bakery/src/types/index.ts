export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'pastries' | 'bread' | 'cakes' | 'cookies' | 'cupcakes' | 'croissants' | 'seasonal';
  image: string;
  allergens: string[];
  variants?: {
    sizes?: string[];
    flavors?: string[];
  };
  featured?: boolean;
  popular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedFlavor?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
}

export interface Special {
  id: string;
  title: string;
  description: string;
  image: string;
  validUntil: string;
  discount?: number;
  promoCode?: string;
}