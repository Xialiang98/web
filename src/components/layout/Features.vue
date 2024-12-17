<script setup lang="ts">
import { ref } from 'vue'

const features = [
  {
    title: '一键定制数字人',
    description: '通过AI技术，快速生成高度还原的数字分身',
    icon: '👤'
  },
  {
    title: '多场景应用',
    description: '支持直播、短视频、元宇宙等多种应用场景',
    icon: '🌐'
  },
  {
    title: '智能驱动',
    description: '先进的AI模型驱动，实现自然的表情和动作',
    icon: '🤖'
  },
  {
    title: '一站式解决方案',
    description: '从创建到应用，提供完整的数字人解决方案',
    icon: '🎯'
  }
]

const activeFeature = ref(0)
const setActiveFeature = (index: number) => {
  activeFeature.value = index
}
</script>

<template>
  <section class="py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16">核心功能</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          @mouseenter="setActiveFeature(index)"
          :class="[
            'p-8 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer',
            activeFeature === index
              ? 'bg-blue-600 text-white shadow-xl'
              : 'bg-white text-gray-800 shadow-md hover:shadow-lg'
          ]"
        >
          <div class="text-4xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-bold mb-4">{{ feature.title }}</h3>
          <p :class="[
            'text-sm',
            activeFeature === index ? 'text-blue-100' : 'text-gray-600'
          ]">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <div class="mt-16 text-center">
        <button class="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          了解更多功能
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-card {
  transition: all 0.3s ease;
}
</style>
