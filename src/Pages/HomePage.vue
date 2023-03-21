<script setup>
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";
import { useBookStore } from "@/stores/bookStore";
import { useSearchStore } from "@/stores/searchStore";
import arrowNext from "@/assets/arrowNext.svg";
import arrowBack from "@/assets/arrowBack.svg";

const bookStore = useBookStore();
const searchStore = useSearchStore();

function addToFavorite(book) {
  bookStore.addBook(book);
}

async function searchBook(search) {
  searchStore.offset = 0;
  searchStore.searchQuery = search;
  await searchStore.loadCard();
}
</script>
<template>
  <div>
    <Search @search="searchBook" />

    <h1>Найдено книг: {{ searchStore.totalFoundBooks }}</h1>

    <div
      style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px"
      v-if="bookStore.hasFoundBooks"
    >
      <Card
        v-for="book in bookStore.foundBooks"
        :book="book"
        @addToFavorite="addToFavorite"
        :isFavorite="bookStore.favoriteBooks.some((el) => el.key === book.key)"
      />
    </div>

    <h2 v-else>Список книг пуст</h2>

    <div class="preview__page__wrapper">
      <div class="preview__page__footer">
        <div class="preview__page__content__back">
          <button
            class="preview__page__button"
            @click="searchStore.previousPage"
          >
            <img :src="arrowBack" alt="back" />
          </button>
          <span class="preview__page__text">Предыдущая страница</span>
        </div>
        <div class="preview__page__content__next">
          <span class="preview__page__text">Следующая страница</span>
          <button class="preview__page__button" @click="searchStore.nextPage">
            <img :src="arrowNext" alt="next" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview__page__wrapper {
  display: flex;
  margin-top: 30px;
}

.preview__page__footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.preview__page__content__next {
  display: flex;
  justify-content: flex-start;
}
.preview__page__content__back {
  display: flex;
}

.preview__page__button {
  background: none;
  border: none;
  cursor: pointer;
}
.preview__page__text {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
</style>
