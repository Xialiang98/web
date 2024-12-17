<script setup lang="ts">
import { ref, onMounted } from 'vue'

const selectedPlatform = ref('application')
const videoLoaded = ref(false)
const isVisible = ref(false)

const setSelectedPlatform = (platform: string) => {
  selectedPlatform.value = platform
}

onMounted(() => {
  setTimeout(() => isVisible.value = true, 100)
})

const handleVideoLoad = () => {
  videoLoaded.value = true
}
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
    <div class="relative z-10 container mx-auto px-4 lg:px-16 py-32 lg:py-40">
      <div class="max-w-4xl mx-auto text-center text-white">
        <h1 class="text-5xl lg:text-6xl font-bold mb-8" :class="{'animate-fade-in': isVisible}">
          创造多元超级分身
        </h1>
        <p class="text-xl lg:text-2xl mb-12 opacity-90" :class="{'animate-fade-in delay-200': isVisible}">
          探索曦灵数字人的新世界
        </p>

        <!-- Platform Selection -->
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-12 justify-center">
          <div
            v-for="(platform, index) in [
              { id: 'application', title: '应用平台', desc: '一次人像定制多场景应用' },
              { id: 'open', title: '开放平台', desc: '原子能力组件化输出' }
            ]"
            :key="platform.id"
            @click="setSelectedPlatform(platform.id)"
            :class="[
              'cursor-pointer transition-all duration-300 transform hover:scale-105',
              'p-8 lg:p-10 rounded-xl backdrop-blur-md w-full lg:w-96',
              selectedPlatform === platform.id ? 'bg-blue-600/30 border-blue-400' : 'bg-white/10 border-transparent',
              'border-2'
            ]"
          >
            <h3 class="text-2xl font-bold mb-4">{{ platform.title }}</h3>
            <p class="text-gray-300">{{ platform.desc }}</p>
            <button class="mt-6 px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
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
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
</style>
