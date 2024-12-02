<template>
  <div class="card-body d-flex flex-column p-3">
    <h5 class="card-title text-truncate fw-bold">{{ title }}</h5>
    <p class="card-text text-muted small mb-3">
      {{ description || "No description available" }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { title, description } = defineProps<{ title: string; description: string | null }>();
</script>

<style scoped>
.card-body {
  flex: 1;
}
</style>
