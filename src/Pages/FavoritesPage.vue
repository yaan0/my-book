<script setup>
import Card from "@/components/Card.vue";
import { useBookStore } from "../stores/bookStore";

const bookStore = useBookStore();
</script>
<template>
  <h2>Книг в избранном: {{ bookStore.favoriteBooks.length }}</h2>
  <div
    v-if="bookStore.hasFavoriteBooks"
    style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px"
  >
    <Card
      :book="book"
      v-for="book in bookStore.getFavoriteBooks"
      :isFavorite="true"
    />
  </div>

  <div v-else>
    <h2>Добавьте книги в избранное</h2>
  </div>
</template>

<style scoped></style>
