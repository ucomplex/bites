import { create } from "zustand";

export const useFavoritesStore = create((set, get) => ({
  favorites: [],

  addFavorite: (store) =>
    set((state) => ({
      favorites: [...state.favorites, store],
    })),

  removeFavorite: (storeId) =>
    set((state) => ({
      favorites: state.favorites.filter((store) => store.id !== storeId),
    })),

  isFavorite: (storeId) => {
    const { favorites } = get();
    return favorites.some((store) => store.id === storeId);
  },
}));
