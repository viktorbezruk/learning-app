<template>
  <nav v-if="totalPages > 1" class="mt-4 pagination-container">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }" @click="$emit('change-page', currentPage - 1)">
        <a class="page-link" href="#">Previous</a>
      </li>
      <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }"
        @click="$emit('change-page', page)">
        <a class="page-link" href="#">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }"
        @click="$emit('change-page', currentPage + 1)">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits(["change-page"]);
emit("change-page", props.currentPage);
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: flex-end;
}

.pagination {
  display: flex;
  list-style: none;
  padding: 0;
}

.page-item {
  margin: 0 0.25rem;
}

.page-link {
  padding: 0.5rem 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  color: #2d3748;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.page-item.disabled .page-link {
  color: #a0aec0;
  pointer-events: none;
  cursor: not-allowed;
}

.page-item.active .page-link {
  background-color: #2b6cb0;
  color: white;
  border-color: #2b6cb0;
}

.page-link:hover {
  background-color: #edf2f7;
}
</style>
