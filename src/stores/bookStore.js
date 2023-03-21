import { defineStore } from "pinia";

export const useBookStore = defineStore("books", {
  state: () => {
    return {
      favoriteBooks: [],
      foundBooks: [],
    };
  },
  getters: {
    getFavoriteBooks: (state) => {
      return state.favoriteBooks;
    },
    hasFavoriteBooks: (state) => {
      return state.favoriteBooks.length > 0;
    },
    hasFoundBooks(state) {
      return state.foundBooks.length > 0;
    },
  },
  actions: {
    toggleFavorites(book) {
      const exist = this.favoriteBooks.some((el) => {
        return el.key === book.key;
      });
      if (exist) {
        this.favoriteBooks = this.favoriteBooks.filter(
          (el) => el.key !== book.key
        );
      } else {
        this.favoriteBooks.push(book);
      }
    },
  },
});
