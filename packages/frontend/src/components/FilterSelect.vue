<template>
  <label class="form-label">
    {{ label }}:
    <select :value="modelValue" @input="updateValue" class="form-select">
      <option value="">All</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ capitalize(option) }}
      </option>
    </select>
  </label>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{
  label: string;
  options: string[];
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue", "change"]);

function updateValue(event: Event) {
  const target = event.target as HTMLSelectElement | null;
  if (target) {
    emit("update:modelValue", target.value);
    emit("change");
  }
}

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
</script>

<style scoped>
.form-label {
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  font-weight: 500;
  gap: 0.2rem;
}
</style>
