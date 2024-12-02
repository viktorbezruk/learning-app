<template>
  <div>
    <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
      <span class="d-flex align-items-center gap-1 text-muted small">
        <i class="bi bi-calendar text-primary"></i> {{ formatDate(startDate) }}
      </span>
      <span class="d-flex align-items-center gap-1 text-muted small">
        <i class="bi bi-calendar2 text-primary"></i> {{ formatDate(endDate) }}
      </span>
      <span class="d-flex align-items-center gap-1 text-muted small" v-if="signupDeadline">
        <i class="bi bi-hourglass text-primary"></i> {{ formatDate(signupDeadline) }}
      </span>
      <span class="d-flex align-items-center gap-1 text-muted small">
        <i class="bi bi-geo-alt text-primary"></i> {{ location || "Online" }}
      </span>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary btn-sm mt-2" @click="$emit('signup')">Sign Up</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from "@/utils/formatters";

const { startDate, endDate, signupDeadline, location } = defineProps<{
  startDate: string;
  endDate: string;
  signupDeadline: string | null;
  location: string | null;
}>();
</script>
