<template>
  <div>
    <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
      <span class="d-flex align-items-center gap-1 text-muted small">
        <i class="bi bi-clock text-primary"></i> {{ formatDuration(duration) }}
      </span>
      <span class="d-flex align-items-center gap-1 text-muted small">
        <i class="bi bi-journal text-primary"></i> {{ capitalize(moduleType) }}
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
