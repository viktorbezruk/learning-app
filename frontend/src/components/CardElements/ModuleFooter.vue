<template>
  <div>
    <div class="footer-row flex-wrap">
      <span class="footer-item me-3 mb-2">
        <i class="bi bi-clock"></i> {{ formatDuration(duration) }}
      </span>
      <span class="footer-item mb-2">
        <i class="bi bi-journal"></i> {{ capitalize(moduleType) }}
      </span>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary btn-sm mt-2" @click="$emit('start')">Start</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDuration, capitalize } from "@/utils/formatters";

const { duration, moduleType } = defineProps<{ duration: number; moduleType: string }>();
</script>

<style scoped>
.footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
}

.footer-item {
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #4a5568;
}

.footer-item i {
  color: #2b6cb0;
}
</style>
