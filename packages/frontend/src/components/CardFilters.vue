<template>
  <div class="filters">
    <div class="filter-buttons-wrapper d-flex gap-3 mb-3">
      <button v-for="type in types" :key="type"
        :class="['btn', 'btn-outline-primary', { active: currentFilter === type }]" @click="setType(type)">
        {{ type.charAt(0).toUpperCase() + type.slice(1) }}
      </button>
    </div>

    <div class="filters-content d-flex flex-wrap flex-md-nowrap gap-3">
      <div v-if="currentFilter === 'module'" class="d-flex gap-3">
        <FilterSelect label="Type" :options="moduleTypes" v-model="moduleType" @change="applyModuleFilters" />
        <FilterSelect label="Status" :options="moduleStatuses" v-model="moduleStatus" @change="applyModuleFilters" />
      </div>

      <div v-if="currentFilter === 'event'" class="d-flex gap-3">
        <FilterSelect label="Status" :options="eventStatuses" v-model="eventStatus" @change="applyEventFilters" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useLearningStore } from "@/store/learningStore";
import FilterSelect from "./FilterSelect.vue";

const learningStore = useLearningStore();
const currentFilter = computed(() => learningStore.filterType);
const moduleTypes = ["quiz", "lesson", "survey"];
const moduleStatuses = ["completed", "incomplete", "locked", "pending"];
const eventStatuses = ["attended", "attending", "invited", "declined"];
const types: Array<'all' | 'module' | 'event'> = ['all', 'module', 'event'];

const moduleType = ref("");
const moduleStatus = ref("");
const eventStatus = ref("");

function setType(type: 'all' | 'module' | 'event') {
  learningStore.setFilterType(type);

  moduleType.value = "";
  moduleStatus.value = "";
  eventStatus.value = "";
}

watch(() => learningStore.filterType, (newType) => {
  if (newType === 'module') {
    moduleType.value = learningStore.filterModuleType || "";
    moduleStatus.value = learningStore.filterStatus || "";
  } else if (newType === 'event') {
    eventStatus.value = learningStore.filterStatus || "";
  }
});

function applyModuleFilters() {
  learningStore.setFilterModuleType(moduleType.value || null);
  learningStore.setFilterStatus(moduleStatus.value || null);
}

function applyEventFilters() {
  learningStore.setFilterStatus(eventStatus.value || null);
}
</script>

<style scoped>
.filter-buttons-wrapper .btn.active {
  background-color: var(--link-color);
  color: white;
}
</style>
