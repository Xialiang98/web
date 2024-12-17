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
  <section class="hero-section relative min-h-screen overflow-hidden">
    <!-- Video Background -->
    <div class="absolute inset-0 z-0">
      <video
        class="w-full h-full object-cover"
        autoplay
        loop
        muted
        playsinline
        @loadeddata="handleVideoLoad"
      >
        <source src="https://digital-human-js-cdn.cdn.bcebos.com/digital-human-js/video/homepage-bg.mp4" type="video/mp4">
      </video>
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent transition-opacity duration-1000"
        :class="{'opacity-0': !videoLoaded}"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-[1440px] mx-auto px-6 h-screen flex flex-col justify-center items-center">
      <div class="text-center text-white max-w-[960px] mx-auto">
        <h1
          class="text-5xl lg:text-7xl font-bold mb-8 tracking-tight"
          data-scroll="up"
        >
          创造多元超级分身
        </h1>
        <p
          class="text-xl lg:text-3xl mb-16 opacity-90 font-light"
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
              'p-8 lg:p-10 rounded-2xl backdrop-blur-sm w-full lg:w-[420px]',
              selectedPlatform === platform.id
                ? 'bg-gradient-to-br from-blue-600/40 to-blue-500/40 border-blue-400/50 scale-105'
                : 'bg-white/5 border-white/20 hover:bg-white/10 hover:scale-105',
              'border'
            ]"
          >
            <h3 class="text-2xl lg:text-3xl font-bold mb-4">{{ platform.title }}</h3>
            <p class="text-lg text-gray-200 mb-8">{{ platform.desc }}</p>
            <button
              class="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              即刻体验
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        style="animation-duration: 2s;"
      >
        <p class="text-sm text-gray-400 mb-2">下滑查看更多</p>
        <svg
          class="w-6 h-6 text-gray-400"
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
