import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; size?: string; flavor?: string } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLOSE_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, size, flavor } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id && 
        item.selectedSize === size && 
        item.selectedFlavor === flavor
      );

      let newItems;
      if (existingItemIndex >= 0) {
        newItems = [...state.items];
        newItems[existingItemIndex].quantity += 1;
      } else {
        newItems = [...state.items, { 
          product, 
          quantity: 1, 
          selectedSize: size, 
          selectedFlavor: flavor 
        }];
      }

      const total = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
      return { ...state, items: newItems, total };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => 
        `${item.product.id}-${item.selectedSize}-${item.selectedFlavor}` !== action.payload
      );
      const total = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
      return { ...state, items: newItems, total };
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item => {
        const itemId = `${item.product.id}-${item.selectedSize}-${item.selectedFlavor}`;
        return itemId === action.payload.id 
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item;
      }).filter(item => item.quantity > 0);
      
      const total = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
      return { ...state, items: newItems, total };
    }

    case 'CLEAR_CART':
      return { ...state, items: [], total: 0 };

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    default:
      return state;
  }
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
    total: 0
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};