<template>
  <header class="global-header d-flex align-items-center justify-content-between shadow-sm gap-3">
    <div class="logo d-flex align-items-center gap-2">
      <img src="@/assets/logo.svg" alt="Logo" class="logo-svg" />
      <span class="logo-text">Learning App</span>
    </div>

    <SearchBar v-if="!isMobile" />

    <div class="d-flex align-items-center gap-3 justify-content-end">
      <nav v-if="!isMobile" class="d-flex align-items-center gap-4">
        <a href="#" class="nav-link">Pricing</a>
        <a href="#" class="nav-link">My Courses</a>
        <button class="nav-icon-btn" aria-label="Notifications">
          <i class="bi bi-bell nav-icon"></i>
        </button>
        <div class="messages d-flex align-items-center gap-1">
          <button class="nav-icon-btn" aria-label="Messages">
            <i class="bi bi-chat-dots nav-icon"></i>
          </button>
          <span class="badge bg-danger">3</span>
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
:root {
  --primary-color: #2b6cb0;
  --secondary-color: #4a5568;
  --background-color: #ffffff;
  --font-family: "Poppins", sans-serif;
  --border-color: #e2e8f0;
}

.global-header {
  background-color: #ffffff;
  padding: 0.75rem 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-family: var(--font-family);
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--secondary-color);
}

.logo-svg {
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
}

.nav-link {
  position: relative;
  color: #4a5568;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #2b6cb0;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #2b6cb0;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nav-icon {
  font-size: 1.5rem;
  color: #4a5568;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.nav-icon:hover {
  color: #2b6cb0;
  transform: scale(1.1);
}

.messages .badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #e53e3e;
  color: #ffffff;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.messages {
  position: relative;
}

.messages .badge:hover {
  background-color: #c53030;
}

.badge {
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 0.75rem;
  background-color: var(--primary-color);
  color: var(--background-color);
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

@media (max-width: 768px) {
  .search-bar {
    display: none;
  }

  .nav-link {
    font-size: 0.875rem;
  }

  .nav-icon {
    font-size: 1.25rem;
  }
}
</style>
