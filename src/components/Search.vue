<script setup>
import { ref } from "vue";
import search from "@/assets/search.svg";
import searchWhite from "@/assets/searchWhite.svg";

const emit = defineEmits(["search"]);

function submitSearch() {
  emit("search", searchQuery.value);
}

const searchQuery = ref("");
</script>
<template>
  <div>
    <form @submit.prevent="submitSearch">
      <div class="search">
        <div class="search__wrapper">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Найти книгу или автора...."
            class="search__input"
          />
          <img :src="search" alt="Иконка поиска" />
        </div>
        <button class="search__button" aria-label="Искать" type="submit">
          <img :src="searchWhite" alt="Иконка поиска" />
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 30px;
}

.search__wrapper {
  position: relative;
  flex: 1;
  display: flex;
}

.search__wrapper img {
  position: absolute;
  left: 10px;
  top: 12px;
}

.search__input {
  background: #dedede;
  border: none;
  border-radius: 5px;
  color: #252525;
  padding: 15px 30px 15px 50px;
  flex: 1;
}

.search__input::placeholder {
  color: #494949;
}

.search__button {
  border: none;
  background: #121212;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
