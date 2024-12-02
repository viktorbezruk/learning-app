<template>
  <div class="search-bar position-relative flex-grow-1" style="max-width: 500px;">
    <input v-model="query" @input="updateQuery" type="text" class="form-control rounded-pill ps-3 pe-5"
      placeholder="What you want to learn?" />
    <button class="btn position-absolute top-50 end-0 translate-middle-y me-3 p-0">
      <i class="bi bi-search text-secondary fs-4"></i>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useLearningStore } from "@/store/learningStore";

const learningStore = useLearningStore();
const query = ref(learningStore.searchQuery);

function updateQuery() {
  learningStore.searchQuery = query.value;
}
</script>

<style scoped>
.search-bar {
  max-width: 500px;
}
</style>
