<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const selectedPlatform = ref('application')
const videoLoaded = ref(false)
const isVisible = ref(false)

const setSelectedPlatform = (platform: string) => {
  selectedPlatform.value = platform
}

const handleVideoLoad = () => {
  videoLoaded.value = true
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.3 }
  )

  const section = document.querySelector('.hero-section')
  if (section) {
    observer.observe(section)
  }
})

useScrollAnimation()
</script>

<template>
  <section class="hero-section relative min-h-screen overflow-hidden bg-[var(--background)]">
    <!-- Video Background -->
    <div class="absolute inset-0 z-0">
      <video
        class="w-full h-full object-cover opacity-80"
        autoplay
        loop
        muted
        playsinline
        @loadeddata="handleVideoLoad"
      >
        <source src="https://digital-human-js-cdn.cdn.bcebos.com/digital-human-js/video/homepage-bg.mp4" type="video/mp4">
      </video>
      <div
        class="absolute inset-0 bg-gradient-to-b from-[var(--background)]/90 via-[var(--background)]/60 to-transparent transition-opacity duration-1000"
        :class="{'opacity-0': !videoLoaded}"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 content-container h-screen flex flex-col justify-center items-center">
      <div class="text-center text-white max-w-[960px] mx-auto">
        <h1
          class="text-6xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight"
          data-scroll="up"
        >
          创造多元<br class="hidden lg:block" />超级分身
        </h1>
        <p
          class="text-2xl lg:text-4xl mb-20 text-white/80 font-light tracking-wide"
          data-scroll="up"
          style="--scroll-delay: 200ms;"
        >
          探索曦灵数字人的新世界
        </p>

        <!-- Platform Selection -->
        <div
          class="flex flex-col lg:flex-row gap-8 justify-center items-stretch"
          data-scroll="up"
          style="--scroll-delay: 400ms;"
        >
          <div
            v-for="(platform, index) in [
              { id: 'application', title: '应用平台', desc: '一次人像定制多场景应用' },
              { id: 'open', title: '开放平台', desc: '原子能力组件化输出' }
            ]"
            :key="platform.id"
            @click="setSelectedPlatform(platform.id)"
            :class="[
              'cursor-pointer transition-all duration-500 transform',
              'p-10 lg:p-12 rounded-3xl backdrop-blur-lg w-full lg:w-[480px]',
              selectedPlatform === platform.id
                ? 'bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/10 border-[var(--accent)]/30 scale-105 shadow-2xl shadow-[var(--accent)]/20'
                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:scale-102 hover:shadow-xl hover:border-white/20',
              'border-2'
            ]"
          >
            <h3 class="text-3xl lg:text-4xl font-bold mb-6">{{ platform.title }}</h3>
            <p class="text-xl text-white/80 mb-10">{{ platform.desc }}</p>
            <button
              class="px-10 py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/90 rounded-full text-xl font-medium hover:from-[var(--accent)]/90 hover:to-[var(--accent)]/80 transition-all duration-300 shadow-lg shadow-[var(--accent)]/20 hover:shadow-xl hover:shadow-[var(--accent)]/30"
            >
              即刻体验
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        style="animation-duration: 2s;"
      >
        <p class="text-base text-white/60 mb-3">下滑查看更多</p>
        <svg
          class="w-8 h-8 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-400 {
  animation-delay: 400ms;
}
</style>
