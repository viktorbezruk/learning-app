<template>
  <div class="skeleton-wrapper d-flex flex-wrap gap-3 mt-4">
    <div v-for="i in numberOfItems" :key="i" class="skeleton-card bg-secondary rounded"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  numberOfItems: number;
}>();
</script>

<style scoped>
.skeleton-card {
  width: calc(25% - 1rem);
  height: 200px;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    background-color: var(--secondary-color)
  }

  50% {
    background-color: var(--secondary-color)
  }

  100% {
    background-color: var(--secondary-color)
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
