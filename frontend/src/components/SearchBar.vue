<template>
  <div class="search-bar">
    <input v-model="query" @input="updateQuery" type="text" class="form-control search-input"
      placeholder="What you want to learn?" />
    <button class="search-btn">
      <i class="bi bi-search search-icon"></i>
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
  position: relative;
  flex: 1;
  max-width: 500px;
}

.search-input {
  border-radius: 50px;
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: 1px solid var(--border-color);
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.05);
  font-family: var(--font-family);
}

.search-btn {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--secondary-color);
  font-size: 1.25rem;
  cursor: pointer;
}
</style>
