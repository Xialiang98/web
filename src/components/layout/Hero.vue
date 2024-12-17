<script setup lang="ts">
import { ref } from 'vue'

const selectedPlatform = ref('application')
const setSelectedPlatform = (platform: string) => {
  selectedPlatform.value = platform
}
</script>

<template>
  <section class="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
    <!-- Background Animation -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-radial from-blue-900/20 via-gray-900 to-gray-900 animate-gradient"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-30"></div>
    </div>

    <!-- Content -->
    <div class="relative container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
        创造多元超级分身
      </h1>
      <p class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
        探索曦灵数字人的新世界
      </p>

      <!-- Platform Selection -->
      <div class="flex flex-col md:flex-row gap-8 mt-12">
        <div
          @click="setSelectedPlatform('application')"
          :class="[
            'cursor-pointer transition-all duration-300 transform hover:scale-105',
            'p-8 rounded-xl backdrop-blur-md',
            selectedPlatform === 'application' ? 'bg-blue-600/30 border-blue-400' : 'bg-white/10 border-transparent',
            'border-2'
          ]"
        >
          <h3 class="text-2xl font-bold mb-4">应用平台</h3>
          <p class="text-gray-300">一次人像定制多场景应用</p>
          <button class="mt-6 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
            即刻体验
          </button>
        </div>

        <div
          @click="setSelectedPlatform('open')"
          :class="[
            'cursor-pointer transition-all duration-300 transform hover:scale-105',
            'p-8 rounded-xl backdrop-blur-md',
            selectedPlatform === 'open' ? 'bg-blue-600/30 border-blue-400' : 'bg-white/10 border-transparent',
            'border-2'
          ]"
        >
          <h3 class="text-2xl font-bold mb-4">开放平台</h3>
          <p class="text-gray-300">原子能力组件化输出</p>
          <button class="mt-6 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
            即刻体验
          </button>
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

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-gradient {
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;
}
</style>
