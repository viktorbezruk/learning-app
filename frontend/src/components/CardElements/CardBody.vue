<template>
  <div class="card-body">
    <h5 class="card-title text-truncate">{{ title }}</h5>
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
  padding: 0.75rem 1rem;
  flex: 1;
}

.card-title {
  font-size: 0.875rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
}

.card-text {
  font-size: 0.8rem;
  color: #4a5568;
}
</style>
