<template>
  <div class="empty-state text-center my-4 text-secondary">
    <img src="@/assets/no-data.svg" alt="No data available" class="empty-image mb-3" />
    <p class="empty-text fs-5 fw-semibold">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  message: string;
}>();
</script>

<style scoped>
.empty-image {
  width: 150px;
}
</style>
