import { create } from "zustand";

type CartItem = {
  id: string;
  quantity: number;
  name: string;
  price: number;
  images: string[];
};

type StoreCart = {
  storeId: string;
  items: CartItem[];
};

type CartState = {
  carts: StoreCart[];
  addItemToCart: (storeId: string, item: CartItem) => void;
  removeItemFromCart: (storeId: string, productId: string) => void;
  increaseQuantity: (storeId: string, productId: string) => void;
  decreaseQuantity: (storeId: string, productId: string) => void;
  clearCart: (storeId: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  carts: [],

  addItemToCart: (storeId, item) =>
    set((state) => {
      const existingCart = state.carts.find((cart) => cart.storeId === storeId);

      if (existingCart) {
        const existingItem = existingCart.items.find(
          (cartItem) => cartItem.id === item.id,
        );

        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          existingCart.items.push(item);
        }
      } else {
        state.carts.push({
          storeId,
          items: [item],
        });
      }

      return { carts: state.carts };
    }),

  removeItemFromCart: (storeId, productId) =>
    set((state) => {
      const existingCart = state.carts.find((cart) => cart.storeId === storeId);

      if (existingCart) {
        existingCart.items = existingCart.items.filter(
          (cartItem) => cartItem.id !== productId,
        );
      }
      return { carts: state.carts };
    }),

  increaseQuantity: (storeId, productId) =>
    set((state) => {
      const existingCart = state.carts.find((cart) => cart.storeId === storeId);

      if (existingCart) {
        const existingItem = existingCart.items.find(
          (cartItem) => cartItem.id === productId,
        );
        if (existingItem) {
          existingItem.quantity += 1;
        }
      }

      return { carts: state.carts };
    }),

  decreaseQuantity: (storeId, productId) =>
    set((state) => {
      const existingCart = state.carts.find((cart) => cart.storeId === storeId);

      if (existingCart) {
        const existingItem = existingCart.items.find(
          (cartItem) => cartItem.id === productId,
        );
        if (existingItem && existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else if (existingItem && existingItem.quantity === 1) {
          existingCart.items = existingCart.items.filter(
            (cartItem) => cartItem.id !== productId,
          );
        }
      }

      return { carts: state.carts };
    }),

  clearCart: (storeId) =>
    set((state) => ({
      carts: state.carts.filter((cart) => cart.storeId !== storeId),
    })),
}));
