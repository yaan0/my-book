<script setup>
import { ref, computed } from "vue";
import favoriteWhite from "../assets/favoriteWhite.svg";
import favorites from "../assets/favorites.svg";

const props = defineProps({
  book: { type: Object, required: true },
  isFavorite: { type: Boolean, default: false },
});

const emit = defineEmits(["addToFavorite"]);

const isActive = ref(false);

const bookImage = computed(() => {
  if (props.book.cover_edition_key === undefined) {
    return "Not found";
  }

  return `https://covers.openlibrary.org/b/olid/${props.book.cover_edition_key}-M.jpg`;
});

const bookSubject = computed(() => {
  if (props.book.subject_facet === undefined) {
    return "Missing subject";
  }
  return props.book.subject_facet[0];
});

const bookAuthor = computed(() => {
  if (props.book.author_name === undefined) {
    return "Missing author";
  }
  return props.book.author_name[0];
});

function addToFavorite() {
  emit("addToFavorite", props.book);
}
</script>
<template>
  <div class="card">
    <div class="card__image">
      <img :src="bookImage" alt="Обложка" />
    </div>

    <div class="card__info">
      <div class="">
        <span class="card__tag">{{ bookSubject }}</span>
        <h2 class="card__title">{{ book.title }}</h2>
        <span class="card__author">{{ bookAuthor }}</span>
      </div>

      <div class="card__footer">
        <button
          class="button__add"
          @click="addToFavorite"
          :class="{ button__active: isActive || isFavorite }"
        >
          <img
            :src="isActive || isFavorite ? favorites : favoriteWhite"
            alt="Icon"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
}

.card__image {
  background: #b8b8b8;
  display: flex;
  padding-top: 10px;
  justify-content: center;
  align-items: start;
  height: 180px;
}

.card__info {
  display: flex;
  flex-direction: column;
  background: #121212;
  color: #fafafa;
  padding: 10px;
  min-height: 150px;
}

.card__tag {
  font-weight: 300;
  font-size: 11px;
  line-height: 15px;
  margin-bottom: 3px;
  color: #dedede;
}

.card__title {
  font-weight: 600;
  font-size: 15px;
  line-height: 110%;
  margin-bottom: 8px;
}

.card__author {
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
}

.card__footer {
  margin-top: auto;
  display: flex;
}

.button__add {
  border-radius: 6px;
  width: 36px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid #fafafa;
  cursor: pointer;
}

.button__active {
  background: #fafafa;
}
</style>
