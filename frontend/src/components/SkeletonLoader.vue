<template>
  <div class="skeleton-wrapper">
    <div v-for="i in numberOfItems" :key="i" class="skeleton-card"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  numberOfItems: number;
}>();
</script>

<style scoped>
.skeleton-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.skeleton-card {
  width: calc(25% - 1rem);
  height: 200px;
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    background-color: #e0e0e0;
  }

  50% {
    background-color: #f5f5f5;
  }

  100% {
    background-color: #e0e0e0;
  }
}

@media (max-width: 768px) {
  .skeleton-card {
    width: calc(50% - 1rem);
  }
}

@media (max-width: 480px) {
  .skeleton-card {
    width: calc(100% - 1rem);
  }
}
</style>