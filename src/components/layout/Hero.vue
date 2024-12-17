<script setup lang="ts">
import { ref } from 'vue'
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

useScrollAnimation()
</script>

<template>
  <section class="relative min-h-screen overflow-hidden">
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
        <source src="/videos/hero-background.mp4" type="video/mp4">
      </video>
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"
        :class="{'opacity-0': !videoLoaded}"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 content-container">
      <div class="text-center text-white">
        <h1
          class="text-6xl lg:text-7xl font-bold mb-8"
          data-scroll="up"
        >
          创造多元超级分身
        </h1>
        <p
          class="text-2xl lg:text-3xl mb-16 opacity-90"
          data-scroll="up"
          style="--scroll-delay: 200ms;"
        >
          探索曦灵数字人的新世界
        </p>

        <!-- Platform Selection -->
        <div
          class="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center"
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
              'cursor-pointer transition-all duration-500',
              'p-10 lg:p-12 rounded-2xl backdrop-blur-md w-full lg:w-[480px]',
              selectedPlatform === platform.id ? 'bg-blue-600/40 border-blue-400 scale-105' : 'bg-white/10 border-transparent hover:scale-105',
              'border-2'
            ]"
          >
            <h3 class="text-3xl font-bold mb-6">{{ platform.title }}</h3>
            <p class="text-xl text-gray-200 mb-8">{{ platform.desc }}</p>
            <button class="px-12 py-4 bg-blue-600 rounded-full text-lg hover:bg-blue-700 transition-colors">
              即刻体验
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <p class="text-sm text-gray-400 mb-2">下滑查看更多</p>
        <svg
          class="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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
