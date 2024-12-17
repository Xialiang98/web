<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <TheHeader />

    <main class="pt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            创造多元超级分身
          </h1>
          <p class="text-xl sm:text-2xl text-gray-700 mb-8">
            探索嬗灵数字人的<span class="text-primary">新世界</span>
          </p>
          <div class="flex justify-center space-x-4">
            <button class="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              应用平台
            </button>
            <button class="bg-secondary text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200">
              开放平台
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
