import { defineStore } from "pinia";
import axios from "axios";

import { useBookStore } from "./bookStore";

export const useSearchStore = defineStore("search", {
  state: () => {
    return {
      totalFoundBooks: 0,
      limit: 6,
      offset: 0,
      searchQuery: "",
    };
  },

  actions: {
    async nextPage() {
      this.offset = this.offset + this.limit;
      await this.loadCard();
    },
    async previousPage() {
      if (this.offset === 0) {
        return;
      }
      this.offset = this.offset - this.limit;
      await this.loadCard();
    },
    async loadCard() {
      const bookStore = useBookStore();
      try {
        const res = await axios.get(
          `https://openlibrary.org/search.json?q=${this.searchQuery}&limit=${this.limit}&offset=${this.offset}`
        );
        bookStore.foundBooks = res.data.docs;
        this.totalFoundBooks = res.data.numFound;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
