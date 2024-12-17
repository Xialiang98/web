<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-wave">
    <TheHeader />

    <main class="pt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            创造多元超级分身
          </h1>
          <p class="text-2xl sm:text-3xl text-gray-700 mb-12">
            探索嬗灵数字人的<span class="text-primary">新世界</span>
          </p>
          <div class="flex justify-center space-x-6">
            <button class="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg">
              应用平台
            </button>
            <button class="bg-secondary text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors text-lg">
              开放平台
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
