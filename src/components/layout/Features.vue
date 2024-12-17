<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const features = [
  {
    title: '一键定制数字人',
    description: '通过AI技术，快速生成高度还原的数字分身',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>`
  },
  {
    title: '多场景应用',
    description: '支持直播、短视频、元宇宙等多种应用场景',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>`
  },
  {
    title: '智能驱动',
    description: '先进的AI模型驱动，实现自然的表情和动作',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>`
  },
  {
    title: '一站式解决方案',
    description: '从创建到应用，提供完整的数字人解决方案',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>`
  }
]

const activeFeature = ref(0)

const setActiveFeature = (index: number) => {
  activeFeature.value = index
}

useScrollAnimation()
</script>

<template>
  <section class="features-section py-32 lg:py-40 bg-[var(--background)]">
    <div class="content-container">
      <div class="text-center mb-24">
        <h2
          class="text-5xl lg:text-6xl font-bold mb-8 text-white"
          data-scroll="up"
        >
          核心功能
        </h2>
        <p
          class="text-2xl lg:text-3xl text-white/80 font-light"
          data-scroll="up"
          style="--scroll-delay: 200ms;"
        >
          打造专属于您的数字人解决方案
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        <div
          v-for="(feature, index) in features"
          :key="index"
          @mouseenter="setActiveFeature(index)"
          data-scroll="scale"
          :style="`--scroll-delay: ${(index + 1) * 150}ms`"
          class="group relative p-10 rounded-3xl transition-all duration-500 hover:scale-105"
          :class="[
            'bg-white/5 backdrop-blur-lg border-2',
            activeFeature === index
              ? 'border-[var(--accent)]/40 shadow-2xl shadow-[var(--accent)]/20'
              : 'border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-white/5'
          ]"
        >
          <div
            class="mb-10 text-[var(--accent)] transition-colors duration-300 group-hover:text-[var(--accent)]/80"
            v-html="feature.icon"
          ></div>
          <h3 class="text-3xl font-bold mb-6 text-white">{{ feature.title }}</h3>
          <p class="text-lg text-white/70 leading-relaxed mb-8">{{ feature.description }}</p>
          <div>
            <a
              href="#"
              class="inline-flex items-center text-[var(--accent)] hover:text-[var(--accent)]/80 font-medium group/link"
            >
              了解更多
              <svg
                class="w-6 h-6 ml-2 transform transition-transform group-hover/link:translate-x-1"
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
.features-section {
  position: relative;
  overflow: hidden;
}

.features-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
}
</style>
