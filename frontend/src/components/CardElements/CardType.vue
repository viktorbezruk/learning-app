<template>
  <div class="card-type position-absolute top-0 start-0 p-2 text-white fw-bold rounded-1"
    :class="typeClass">
    {{ type.toUpperCase() }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const { type } = defineProps<{ type: string }>();

const typeClass = computed(() => {
  return type === "module" ? "bg-danger" : "bg-info";
});
</script>

<style scoped>
.card-type {
  top: 10px;
  left: 10px;
  z-index: 2;
  font-size: 0.75rem;
}
</style>
