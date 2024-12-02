<template>
  <header
    class="global-header d-flex align-items-center justify-content-between shadow-sm gap-3 p-3 sticky-top bg-white">
    <div class="logo d-flex align-items-center gap-2">
      <img src="@/assets/logo.svg" alt="Logo" class="logo-svg" />
      <span class="logo-text">Learning App</span>
    </div>

    <SearchBar v-if="!isMobile" />

    <div class="d-flex align-items-center gap-3 justify-content-end">
      <nav v-if="!isMobile" class="d-flex align-items-center gap-4">
        <a href="#" class="nav-link">Pricing</a>
        <a href="#" class="nav-link">My Courses</a>
        <button class="btn p-0" aria-label="Notifications">
          <i class="bi bi-bell nav-icon"></i>
        </button>
        <div class="messages d-flex align-items-center position-relative">
          <button class="btn p-0" aria-label="Messages">
            <i class="bi bi-chat-dots nav-icon"></i>
          </button>
          <span class="badge bg-danger position-absolute top-0 start-100 translate-middle">3</span>
        </div>
      </nav>
      <img src="@/assets/user.svg" alt="User Avatar" class="avatar ms-3" />
    </div>
  </header>
</template>

<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
import SearchBar from "@/components/SearchBar.vue";
import { ref, onMounted } from "vue";

const isMobile = ref(false);

function checkMobile() {
  isMobile.value = window.innerWidth <= 768;
}

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});
</script>

<style scoped>
.logo {
  font-family: var(--font-family);
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--secondary-color);
}

.logo-svg {
  width: 30px;
  height: 30px;
}

.nav-link {
  position: relative;
  color: var(--secondary-color);
  text-decoration: none;
  font-family: var(--font-family);
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-icon {
  font-size: 1.5rem;
  color: var(--secondary-color);
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-icon:hover {
  color: var(--primary-color);
  transform: scale(1.1);
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--border-color);
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.avatar:hover {
  border-color: var(--primary-color);
}
</style>