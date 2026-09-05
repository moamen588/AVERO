import { create } from "zustand";
import type { Product } from "@/lib/products";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}

export interface Toast {
  id: string;
  message: string;
  image?: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  modalProduct: Product | null;
  toasts: Toast[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  openModal: (product: Product) => void;
  closeModal: () => void;
  showToast: (message: string, image?: string) => void;
  removeToast: (id: string) => void;
  totalItems: () => number;
  totalPrice: () => number;
}

let toastCounter = 0;

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  modalProduct: null,
  toasts: [],

  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.id === item.id && i.size === item.size
      );
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id && i.size === item.size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
          isOpen: true,
        };
      }
      return {
        items: [...state.items, { ...item, quantity: 1 }],
        isOpen: true,
      };
    });
  },

  removeItem: (id, size) => {
    set((state) => ({
      items: state.items.filter((i) => !(i.id === id && i.size === size)),
    }));
  },

  updateQuantity: (id, size, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id, size);
      return;
    }
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id && i.size === size ? { ...i, quantity } : i
      ),
    }));
  },

  clearCart: () => set({ items: [] }),

  openCart: () => set({ isOpen: true }),

  closeCart: () => set({ isOpen: false }),

  openModal: (product) => set({ modalProduct: product }),

  closeModal: () => set({ modalProduct: null }),

  showToast: (message, image) => {
    const id = `toast-${++toastCounter}`;
    set((state) => ({
      toasts: [...state.toasts, { id, message, image }],
    }));
    setTimeout(() => {
      get().removeToast(id);
    }, 3000);
  },

  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    }));
  },

  totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),

  totalPrice: () =>
    get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
}));
