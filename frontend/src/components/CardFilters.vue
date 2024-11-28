<template>
  <div class="filters">
    <div class="filter-buttons-wrapper">
      <button v-for="type in ['all', 'module', 'event']" :key="type"
        :class="['filter-button', { active: currentFilter === type }]" @click="setType(type)">
        {{ type.charAt(0).toUpperCase() + type.slice(1) }}
      </button>
    </div>

    <div class="filters-content d-flex flex-wrap flex-md-nowrap gap-3 mt-3 mt-md-0">
      <div v-if="currentFilter === 'module'" class="d-flex gap-3">
        <label class="filter-label">
          Type:
          <select v-model="moduleType" @change="applyModuleFilters" class="filter-select">
            <option value="">All</option>
            <option v-for="type in moduleTypes" :key="type" :value="type">
              {{ type.charAt(0).toUpperCase() + type.slice(1) }}
            </option>
          </select>
        </label>
        <label class="filter-label">
          Status:
          <select v-model="moduleStatus" @change="applyModuleFilters" class="filter-select">
            <option value="">All</option>
            <option v-for="status in moduleStatuses" :key="status" :value="status">
              {{ status.charAt(0).toUpperCase() + status.slice(1) }}
            </option>
          </select>
        </label>
      </div>

      <div v-if="currentFilter === 'event'" class="d-flex gap-3">
        <label class="filter-label">
          Status:
          <select v-model="eventStatus" @change="applyEventFilters" class="filter-select">
            <option value="">All</option>
            <option v-for="status in eventStatuses" :key="status" :value="status">
              {{ status.charAt(0).toUpperCase() + status.slice(1) }}
            </option>
          </select>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useLearningStore } from "../store/learningStore";

const learningStore = useLearningStore();
const currentFilter = computed(() => learningStore.filterType);
const moduleTypes = ["quiz", "lesson", "survey"];
const moduleStatuses = ["completed", "incomplete", "locked", "pending"];
const eventStatuses = ["attended", "attending", "invited", "declined"];

const moduleType = ref("");
const moduleStatus = ref("");
const eventStatus = ref("");

function setType(type: string) {
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
.filters {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .filters {
    flex-direction: row;
    align-items: end;
  }
}

.filter-buttons-wrapper {
  display: flex;
  gap: 1rem;
}

.filters-wrapper {
  width: 100%;
}

.filters-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.filter-button {
  padding: 0.5rem 1rem;
  background: #f3f4f6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.filter-button.active {
  background: #2b6cb0;
  color: white;
}

.filter-button:hover {
  background: #2c5282;
  color: #fff;
}

.filter-label {
  display: flex;
  flex-direction: column;
  font-size: 0.675rem;
  font-weight: 500;
  gap: 0.2rem;
}

.filter-select {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: #f7fafc;
  color: #2d3748;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-select:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

.filter-select:hover {
  background-color: #edf2f7;
}
</style>
