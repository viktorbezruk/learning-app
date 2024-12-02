<template>
  <nav v-if="totalPages > 1" class="mt-4 d-flex justify-content-end">
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
</script>

<style scoped>
.page-item .page-link {
  cursor: pointer;
}

.page-item.active .page-link {
  background-color: var(--link-color);
  color: white;
  border-color: var(--link-color);
}

.page-item.disabled .page-link {
  color: var(--secondary-color);
  pointer-events: none;
  cursor: not-allowed;
}
</style>
