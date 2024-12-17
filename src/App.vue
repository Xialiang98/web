<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
import Hero from './components/layout/Hero.vue'
import Features from './components/layout/Features.vue'
import Solutions from './components/layout/Solutions.vue'
import Partners from './components/layout/Partners.vue'
import Footer from './components/layout/Footer.vue'
import './assets/styles/animations.css'
import './assets/styles/global.css'
</script>

<template>
  <div class="app">
    <Navbar />
    <main>
      <Hero />
      <Features />
      <Solutions />
      <Partners />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Base styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  color: var(--text-primary);
  background-color: var(--background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Global Layout */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Reset default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Utility classes */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
