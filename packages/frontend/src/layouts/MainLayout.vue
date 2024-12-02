<template>
  <div>
    <AppHeader />
    <main class="main-content py-4 px-3">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 70px);
  background-color: #f1f1f1;
}
</style>
