<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
    <div v-for="card in cards" :key="card.data.id" class="col">
      <LearningCard :content="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LearningCard from "./LearningCard.vue";
import type { LearningModel } from "../types/learningTypes";
defineProps<{ cards: Array<LearningModel> }>();
</script>
