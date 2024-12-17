<script setup lang="ts">
import { ref, onMounted } from 'vue'

const solutions = [
  {
    title: '虚拟主播',
    description: '为直播、短视频等场景提供专业的虚拟主播解决方案',
    icon: '📺',
    features: ['个性化形象定制', '实时表情驱动', '智能语音交互']
  },
  {
    title: '智能客服',
    description: '24小时在线的数字人客服，提供专业、高效的服务体验',
    icon: '💼',
    features: ['多轮对话能力', '业务知识图谱', '情感化交互']
  },
  {
    title: '教育培训',
    description: '打造个性化的数字人讲师，提供沉浸式学习体验',
    icon: '🎓',
    features: ['课程内容定制', '互动式教学', '学习效果追踪']
  },
  {
    title: '文旅文娱',
    description: '为景区、博物馆等场景提供沉浸式数字人讲解服务',
    icon: '🎭',
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
</script>

<template>
  <section class="solutions-section py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-4 lg:px-16">
      <div class="text-center mb-16 lg:mb-24">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6" :class="{'animate-fade-in': isVisible}">行业解决方案</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto" :class="{'animate-fade-in delay-200': isVisible}">
          为不同行业场景提供专业的数字人解决方案，助力企业数字化转型升级
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
        <div
          v-for="(solution, index) in solutions"
          :key="index"
          @mouseenter="setActiveSolution(index)"
          class="group relative overflow-hidden"
          :class="{'animate-scale-in': isVisible, ['delay-' + ((index + 1) * 200)]: isVisible}"
        >
          <div
            class="p-10 lg:p-12 rounded-2xl transition-all duration-500 h-full solution-card"
            :class="[
              'transform hover:scale-[1.02]',
              activeSolution === index
                ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl'
                : 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
            ]"
          >
            <div class="flex items-start gap-6">
              <div class="text-5xl">{{ solution.icon }}</div>
              <div class="flex-1">
                <h3 class="text-2xl lg:text-3xl font-bold mb-4">{{ solution.title }}</h3>
                <p :class="[
                  'text-lg mb-8 leading-relaxed',
                  activeSolution === index ? 'text-blue-100' : 'text-gray-600'
                ]">
                  {{ solution.description }}
                </p>
                <ul class="space-y-4">
                  <li
                    v-for="(feature, fIndex) in solution.features"
                    :key="fIndex"
                    class="flex items-center gap-3"
                    :class="activeSolution === index ? 'text-blue-100' : 'text-gray-600'"
                  >
                    <svg
                      class="w-5 h-5 flex-shrink-0"
                      :class="activeSolution === index ? 'text-blue-200' : 'text-blue-600'"
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
      </div>

      <div class="text-center mt-16 lg:mt-24">
        <a
          href="#contact"
          class="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
        >
          咨询解决方案
          <svg
            class="w-5 h-5 ml-2"
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
.group {
  perspective: 1000px;
}

.group:hover .solution-card {
  transform: translateZ(20px);
}
</style>
