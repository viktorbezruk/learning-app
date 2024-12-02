import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { fetchLearningContent } from "../services/apiService";
import type { LearningModel } from "@learning-app/backend/src/types/learningTypes";
import { FilterType } from "../constants/filters";
import { ApiResponse } from "@/types/api";

interface FetchContentParams {
  page: number;
  limit: number;
  type?: FilterType;
  moduleType?: string;
  status?: string;
  search?: string;
  sort?: string;
}

export const useLearningStore = defineStore("learning", () => {
  // State
  const learningContent = ref<LearningModel[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const searchQuery = ref<string>("");
  const filterType = ref<FilterType>("all");
  const filterModuleType = ref<string | null>(null);
  const filterStatus = ref<string | null>(null);
  const sortBy = ref<string | null>(null);
  const currentPage = ref<number>(1);
  const itemsPerPage = ref<number>(8);
  const totalItems = ref<number>(0);

  // Actions
  const fetchContent = async () => {
    isLoading.value = true;
    error.value = null;

    const params: FetchContentParams = {
      page: currentPage.value,
      limit: itemsPerPage.value,
      type: filterType.value !== "all" ? filterType.value : undefined,
      moduleType: filterModuleType.value || undefined,
      status: filterStatus.value || undefined,
      search: searchQuery.value || undefined,
      sort: sortBy.value || undefined,
    };

    try {
      const response: ApiResponse<{ items: LearningModel[]; total: number }> =
        await fetchLearningContent(params);
      if (response.success) {
        const { data } = response;
        learningContent.value = data.items;
        totalItems.value = data.total;
      } else {
        error.value = response.message || "Failed to load learning content.";
      }
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message;
      }
      error.value = "Failed to load learning content.";
    } finally {
      isLoading.value = false;
    }
  };

  const changePage = (page: number) => {
    currentPage.value = page;
    fetchContent();
  };

  const setFilterType = (type: FilterType) => {
    filterType.value = type;
    currentPage.value = 1;
    filterModuleType.value = null;
    filterStatus.value = null;
    fetchContent();
  };

  const setFilterModuleType = (moduleType: string | null) => {
    filterModuleType.value = moduleType;
    currentPage.value = 1;
    fetchContent();
  };

  const setFilterStatus = (status: string | null) => {
    filterStatus.value = status;
    currentPage.value = 1;
    fetchContent();
  };

  const setSortBy = (sort: string | null) => {
    sortBy.value = sort;
    currentPage.value = 1;
    fetchContent();
  };

  const setSearchQuery = (query: string) => {
    searchQuery.value = query;
    currentPage.value = 1;
    fetchContent();
  };

  // Getters
  const totalPages = computed(() =>
    Math.ceil(totalItems.value / itemsPerPage.value)
  );

  return {
    // State
    learningContent,
    isLoading,
    error,
    searchQuery,
    filterType,
    filterModuleType,
    filterStatus,
    sortBy,
    currentPage,
    itemsPerPage,
    totalItems,

    // Actions
    fetchContent,
    changePage,
    setFilterType,
    setFilterModuleType,
    setFilterStatus,
    setSortBy,
    setSearchQuery,

    // Getters
    totalPages,
  };
});
