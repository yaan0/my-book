<script setup>
import booksLogo from "@/assets/booksLogo.svg";
import search from "@/assets/search.svg";
import favorites from "@/assets/favorites.svg";
import { useBookStore } from "@stores/bookStore";

const bookStore = useBookStore();
</script>
<template>
  <div class="header__main">
    <div class="header__logo">
      <img :src="booksLogo" alt="Logo" />
    </div>
    <div class="header__menu">
      <div class="header__item">
        <RouterLink to="/">
          <img :src="search" alt="search" />
          <span>Поиск книг</span>
        </RouterLink>
        <RouterLink to="/favorites">
          <img :src="favorites" alt="favorite" />
          <span>Избранное</span>
          <div class="header__counter">
            {{ bookStore.favoriteBooks.length }}
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header__main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 20px;
}
.header__menu {
  display: flex;
  align-items: center;
  gap: 30px;
}

.header__item {
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: 14px;
  line-height: 20px;
}

a {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #121212;
}

.router-link-exact-active {
  font-weight: 700;
}

.header__counter {
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  border: 1px solid #121212;
  border-radius: 50%;
  padding: 0 10px;
}
</style>
