<template>
  <div>
    <div class="footer-row flex-wrap">
      <span class="footer-item me-3 mb-2">
        <i class="bi bi-calendar"></i> {{ formatDate(startDate) }}
      </span>
      <span class="footer-item me-3 mb-2">
        <i class="bi bi-calendar2"></i> {{ formatDate(endDate) }}
      </span>
      <span class="footer-item me-3 mb-2" v-if="signupDeadline">
        <i class="bi bi-hourglass"></i> {{ formatDate(signupDeadline) }}
      </span>
      <span class="footer-item mb-2">
        <i class="bi bi-geo-alt"></i> {{ location || "Online" }}
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

<style scoped>
.footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
}

.footer-item {
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #4a5568;
}

.footer-item i {
  color: #2b6cb0;
}

.btn {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
}
</style>
