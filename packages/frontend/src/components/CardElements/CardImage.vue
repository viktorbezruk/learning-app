<template>
  <div class="position-relative overflow-hidden rounded-3" style="height: 150px;">
    <img :src="imagePath || defaultImage" :alt="altText" class="img-fluid w-100 h-100 object-fit-cover" />
    <div
      class="position-absolute top-0 end-0 d-flex align-items-center justify-content-center rounded-bottom-left status-icon"
      :class="statusBackgroundClass">
      <i :class="statusIcon"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EventStatuses, ModuleStatuses } from "@learning-app/backend/src/types/learningTypes";
import { computed } from "vue";

const props = defineProps<{
  imagePath: string | null;
  altText: string;
  status: string;
}>();

const defaultImage = "/default-image.png";

const statusBackgroundClass = computed(() => ({
  "bg-success": props.status === ModuleStatuses.COMPLETED || props.status === EventStatuses.ATTENDED,
  "bg-warning": props.status === ModuleStatuses.PENDING || props.status === EventStatuses.INVITED,
  "bg-danger": props.status === ModuleStatuses.LOCKED || props.status === EventStatuses.DECLINED,
  "bg-secondary": props.status === ModuleStatuses.INCOMPLETE || props.status === EventStatuses.ATTENDING,
}));

const statusIcon = computed(() => ({
  [ModuleStatuses.COMPLETED]: "bi bi-check",
  [ModuleStatuses.INCOMPLETE]: "bi bi-dash-circle",
  [ModuleStatuses.LOCKED]: "bi bi-lock",
  [ModuleStatuses.PENDING]: "bi bi-clock",
  [EventStatuses.ATTENDED]: "bi bi-check-circle",
  [EventStatuses.ATTENDING]: "bi bi-person-check",
  [EventStatuses.INVITED]: "bi bi-envelope",
  [EventStatuses.DECLINED]: "bi bi-x-circle",
}[props.status]));
</script>

<style scoped>
.status-icon {
  width: 30px;
  height: 30px;
  color: #fff;
  font-size: 1rem;
}
</style>
