<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
    <div v-for="card in cards" :key="card.data.id" class="col">
      <LearningCard :content="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LearningModel } from "@learning-app/backend/src/types/learningTypes";
import LearningCard from "./LearningCard.vue";
defineProps<{ cards: Array<LearningModel> }>();
</script>
