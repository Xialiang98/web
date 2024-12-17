<script setup lang="ts">
import { ref, onMounted } from 'vue'

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
const isVisible = ref(false)

const setActiveFeature = (index: number) => {
  activeFeature.value = index
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

  const section = document.querySelector('.features-section')
  if (section) {
    observer.observe(section)
  }
})
</script>

<template>
  <section class="features-section py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4 lg:px-16">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6" :class="{'animate-fade-in': isVisible}">核心功能</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto" :class="{'animate-fade-in delay-200': isVisible}">
          打造专属于您的数字人解决方案
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div
          v-for="(feature, index) in features"
          :key="index"
          @mouseenter="setActiveFeature(index)"
          :class="[
            'p-8 lg:p-12 rounded-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer',
            'bg-white shadow-lg hover:shadow-xl animate-scale-in',
            {'delay-' + (index + 1) * 100: isVisible},
            activeFeature === index ? 'border-2 border-blue-500' : 'border-2 border-transparent'
          ]"
        >
          <div class="text-5xl mb-6">{{ feature.icon }}</div>
          <h3 class="text-2xl font-bold mb-4 text-gray-900">{{ feature.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
          <div class="mt-8">
            <a
              href="#"
              class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              了解更多
              <svg
                class="w-5 h-5 ml-2"
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
