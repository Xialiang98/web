<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const solutions = [
  {
    title: '虚拟主播',
    description: '为直播、短视频等场景提供专业的虚拟主播解决方案',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>`,
    features: ['个性化形象定制', '实时表情驱动', '智能语音交互']
  },
  {
    title: '智能客服',
    description: '24小时在线的数字人客服，提供专业、高效的服务体验',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>`,
    features: ['多轮对话能力', '业务知识图谱', '情感化交互']
  },
  {
    title: '教育培训',
    description: '打造个性化的数字人讲师，提供沉浸式学习体验',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-6-3.5v2.5" />
    </svg>`,
    features: ['课程内容定制', '互动式教学', '学习效果追踪']
  },
  {
    title: '文旅文娱',
    description: '为景区、博物馆等场景提供沉浸式数字人讲解服务',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>`,
    features: ['场景化演绎', '多语言支持', '文化传播创新']
  }
]

const activeSolution = ref(0)
const isVisible = ref(false)

const setActiveSolution = (index: number) => {
  activeSolution.value = index
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

  const section = document.querySelector('.solutions-section')
  if (section) {
    observer.observe(section)
  }
})

useScrollAnimation()
</script>

<template>
  <section class="solutions-section py-32 lg:py-40 bg-[var(--background)]">
    <div class="content-container">
      <div class="text-center mb-24">
        <h2
          class="text-5xl lg:text-6xl font-bold mb-8 text-white"
          data-scroll="up"
        >
          行业解决方案
        </h2>
        <p
          class="text-2xl lg:text-3xl text-white/80 font-light"
          data-scroll="up"
          style="--scroll-delay: 200ms;"
        >
          为不同行业场景提供专业的数字人解决方案，助力企业数字化转型升级
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
        <div
          v-for="(solution, index) in solutions"
          :key="index"
          @mouseenter="setActiveSolution(index)"
          data-scroll="scale"
          :style="`--scroll-delay: ${(index + 1) * 150}ms`"
          class="group relative overflow-hidden w-full max-w-[380px] mx-auto"
        >
          <div
            class="p-10 lg:p-12 rounded-3xl transition-all duration-500 h-full solution-card backdrop-blur-lg border-2"
            :class="[
              'transform hover:scale-105 bg-white/5',
              activeSolution === index
                ? 'border-[var(--accent)]/40 shadow-2xl shadow-[var(--accent)]/20'
                : 'border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-white/5'
            ]"
          >
            <div class="flex flex-col h-full">
              <div
                class="mb-10 text-[var(--accent)] transition-colors duration-300 group-hover:text-[var(--accent)]/80"
                v-html="solution.icon"
              ></div>
              <h3 class="text-3xl font-bold mb-6 text-white">{{ solution.title }}</h3>
              <p class="text-lg text-white/70 leading-relaxed mb-8 flex-grow">{{ solution.description }}</p>
              <ul class="space-y-4">
                <li
                  v-for="(feature, fIndex) in solution.features"
                  :key="fIndex"
                  class="flex items-center gap-4 text-white/70"
                >
                  <svg
                    class="w-6 h-6 flex-shrink-0 text-[var(--accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-lg">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-24">
        <a
          href="#contact"
          class="inline-flex items-center px-14 py-5 text-xl font-medium text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/80 rounded-full hover:from-[var(--accent)]/90 hover:to-[var(--accent)]/70 transition-all duration-300 shadow-lg shadow-[var(--accent)]/20 hover:shadow-xl hover:shadow-[var(--accent)]/30 group"
        >
          咨询解决方案
          <svg
            class="w-6 h-6 ml-3 transform transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solutions-section {
  position: relative;
  overflow: hidden;
}

.solutions-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
}

.solution-card {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (min-width: 1024px) {
  .solution-card:hover {
    transform: translateY(-8px);
  }
}
</style>
