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
    addBook(book) {
      this.favoriteBooks.push(book);
    },
  },
});
