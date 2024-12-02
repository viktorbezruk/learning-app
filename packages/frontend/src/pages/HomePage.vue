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
        @changePage="onPageChange" />
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
import EmptyState from "@/components/EmptyState.vue";
import { onMounted, watch } from "vue";
import { useLearningStore } from "@/store/learningStore";

const learningStore = useLearningStore();

const initLearningContent = () => {
  learningStore.fetchContent();
};

const onPageChange = (page: number) => {
  learningStore.changePage(page);
};

onMounted(initLearningContent);

watch(() => [learningStore.searchQuery, learningStore.filterType], () => {
  learningStore.fetchContent();
});
</script>
