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

      <div class="theme-options">
        <div
          id="theme-green"
          :class="{ active: activeTheme === 'theme-green' }"
          @click="setActiveTheme('theme-green', '#37b18c')"
        ></div>
        <div
          id="theme-blue"
          :class="{ active: activeTheme === 'theme-blue' }"
          @click="setActiveTheme('theme-blue', '#377ab1')"
        ></div>
        <div
          id="theme-red"
          :class="{ active: activeTheme === 'theme-red' }"
          @click="setActiveTheme('theme-red', '#b14537')"
        ></div>
      </div>

    </div>
  </header>


  <RouterView />
</template>

<style>

.my-bi{
  font-size: 2rem;
  color: var(--text-color);
}

.my-nav-text{
  font-size: 2rem;
  color: var(--text-color);
}

.my-navbar{
  background: var(--bg-black-100) !important;
}

body{
  background: var(--bg-black-50);
  height: 100%;
}



.theme-options {
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  padding: 20px 0;
}

.theme-options div {
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin: 2px 10px;
  display: inline-block;
  opacity: 0.3;
  padding: 10px;
  transition: all 0.3s;
}

.theme-options div.active {
  opacity: 1;
}

#theme-green {
  background-color: #37b18c;
}

#theme-blue {
  background-color: #377ab1;
}

#theme-red {
  background-color: #b14537;
}

@media only screen and (max-width: 600px) {
  .theme-options {
    position: relative;
    margin: 0;
  }
}
</style>
