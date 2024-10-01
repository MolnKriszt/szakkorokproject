<script setup>
import { RouterView } from "vue-router";
import { ref, onMounted } from "vue";

const activeTheme = ref("theme-green");

const setActiveTheme = (themeId, color) => {
  document.documentElement.style.setProperty("--text-color", color);
  activeTheme.value = themeId;
  localStorage.setItem("themeColor", color);
  localStorage.setItem("themeId", themeId);
};

onMounted(() => {
  const savedColor = localStorage.getItem("themeColor");
  const savedThemeId = localStorage.getItem("themeId");

  if (savedColor && savedThemeId) {
    document.documentElement.style.setProperty("--text-color", savedColor);
    activeTheme.value = savedThemeId;
  }
});
</script>

<template>
  <header>
    <div class="container-fluid p-0">
      <!-- navbar -->
      <nav class="navbar bg-body-tertiary my-navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <i class="bi bi-person-circle my-bi"></i>
            <span class="ms-2 my-nav-text">Szakkörök</span>
          </a>
        </div>
      </nav>


    </div>
  </header>


  <RouterView />
</template>

<style>

.my-bi{
  font-size: 2rem;
  color: #C94D3C;
}

.my-nav-text{
  font-size: 2rem;
  color: #C94D3C;
}

.my-navbar{
  background: #D7D6CD !important;
}

body{
  background: var(--bg-black-100);
  height: 100%;
}

</style>
