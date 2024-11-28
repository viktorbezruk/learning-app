<template>
  <div class="empty-state">
    <img src="@/assets/no-data.svg" alt="No data available" class="empty-image" />
    <p class="empty-text">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  message: string;
}>();
</script>

<style scoped>
.empty-state {
  text-align: center;
  margin-top: 2rem;
  color: #4a5568;
}

.empty-image {
  width: 150px;
  margin-bottom: 1rem;
}

.empty-text {
  font-size: 1.125rem;
  font-weight: 500;
}
</style>