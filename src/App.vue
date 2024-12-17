<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
import Hero from './components/layout/Hero.vue'
import Features from './components/layout/Features.vue'
import Solutions from './components/layout/Solutions.vue'
import Partners from './components/layout/Partners.vue'
import Footer from './components/layout/Footer.vue'
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
:root {
  --section-padding-y: 4rem;
  --section-padding-x: 1rem;
  --container-max-width: 1280px;
  --header-height: 5rem;
}

@media (min-width: 1024px) {
  :root {
    --section-padding-y: 6rem;
    --section-padding-x: 2rem;
    --header-height: 6rem;
  }
}

@media (min-width: 1280px) {
  :root {
    --section-padding-y: 8rem;
    --section-padding-x: 4rem;
  }
}

.app {
  min-height: 100vh;
}

main {
  margin-top: var(--header-height);
}

.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--section-padding-x);
}

section {
  padding: var(--section-padding-y) 0;
}

/* PC-specific styles */
@media (min-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
  }

  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
