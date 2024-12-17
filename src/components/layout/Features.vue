<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const features = [
  {
    title: '一键定制数字人',
    description: '通过AI技术，快速生成高度还原的数字分身',
    icon: '🎭'
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

useScrollAnimation()
</script>

<template>
  <section class="features-section py-[var(--section-padding)] bg-gradient-to-b from-gray-50 to-white">
    <div class="content-container">
      <div class="text-center mb-20">
        <h2
          class="text-4xl lg:text-5xl font-bold mb-8"
          data-scroll="up"
        >
          核心功能
        </h2>
        <p
          class="text-xl lg:text-2xl text-gray-600"
          data-scroll="up"
          style="--scroll-delay: 200ms;"
        >
          打造专属于您的数字人解决方案
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[var(--grid-gap)]">
        <div
          v-for="(feature, index) in features"
          :key="index"
          data-scroll="scale"
          :style="`--scroll-delay: ${(index + 1) * 200}ms`"
          :class="[
            'p-8 rounded-2xl transition-all duration-500',
            'bg-white shadow-lg hover:shadow-xl',
            activeFeature === index ? 'border-2 border-blue-500 scale-105' : 'border-2 border-transparent hover:scale-105'
          ]"
        >
          <div class="text-6xl mb-8">{{ feature.icon }}</div>
          <h3 class="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">{{ feature.title }}</h3>
          <p class="text-lg text-gray-600 leading-relaxed mb-8">{{ feature.description }}</p>
          <div>
            <a
              href="#"
              class="inline-flex items-center text-blue-600 hover:text-blue-700 text-lg font-medium group"
            >
              了解更多
              <svg
                class="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-card {
  transition: all 0.3s ease;
}
</style>
