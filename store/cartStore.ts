import { create } from "zustand";
import {type CartItem,type CartStore } from "types/Cart";

export const useCartStore = create<CartStore>((set) => ({
    items: [],
    total: 0,
    
    addItem: (newItem: CartItem) => set((state) => {
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
      }
      
      const updatedItems = [...state.items, { ...newItem, quantity: 1 }];
      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }),
    
    removeItem: (itemId: string) => set((state) => {
      const updatedItems = state.items.filter(item => item.id !== itemId);
      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }),
    
    updateQuantity: (itemId: string, quantity: number) => set((state) => {
      const updatedItems = state.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0);
      
      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }),
    
    clearCart: () => set({ items: [], total: 0 }),
  }));