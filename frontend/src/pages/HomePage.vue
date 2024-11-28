<template>
  <MainLayout>
    <div>
      <ContentHeader />
      <CardFilters />

      <div class="row">
        <SkeletonLoader v-if="learningStore.isLoading" :numberOfItems="8" />
        <EmptyState v-else-if="learningStore.learningContent.length === 0" message="No items found" />
        <CardGrid v-else :cards="learningStore.learningContent" />
      </div>

      <AppPagination :currentPage="learningStore.currentPage" :totalPages="learningStore.totalPages"
        @change-page="changePage" />
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import ContentHeader from "@/components/ContentHeader.vue";
import CardFilters from "@/components/CardFilters.vue";
import CardGrid from "@/components/CardGrid.vue";
import AppPagination from "@/components/AppPagination.vue";
import SkeletonLoader from "@/components/SkeletonLoader.vue";
import { defineAsyncComponent, onMounted, watchEffect } from "vue";
import { useLearningStore } from "../store/learningStore";

const learningStore = useLearningStore();

const initLearningContent = () => {
  learningStore.fetchContent();
};

const changePage = (page: number) => {
  if (page > 0 && page <= learningStore.totalPages) {
    learningStore.changePage(page);
  }
};

onMounted(initLearningContent);

watchEffect(() => {
  if (learningStore.searchQuery || learningStore.filterType) {
    learningStore.fetchContent();
  }
});
</script>
