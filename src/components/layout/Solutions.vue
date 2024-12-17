<script setup lang="ts">
import { ref } from 'vue'

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
const setActiveSolution = (index: number) => {
  activeSolution.value = index
}
</script>

<template>
  <section class="py-24 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">行业解决方案</h2>
      <p class="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
        为不同行业场景提供专业的数字人解决方案，助力企业数字化转型升级
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div
          v-for="(solution, index) in solutions"
          :key="index"
          @mouseenter="setActiveSolution(index)"
          :class="[
            'p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2',
            activeSolution === index
              ? 'bg-blue-600 text-white shadow-xl'
              : 'bg-white text-gray-800 shadow-lg hover:shadow-xl'
          ]"
        >
          <div class="text-4xl mb-4">{{ solution.icon }}</div>
          <h3 class="text-2xl font-bold mb-4">{{ solution.title }}</h3>
          <p :class="[
            'mb-6',
            activeSolution === index ? 'text-blue-100' : 'text-gray-600'
          ]">
            {{ solution.description }}
          </p>
          <ul class="space-y-2">
            <li
              v-for="(feature, fIndex) in solution.features"
              :key="fIndex"
              :class="[
                'flex items-center',
                activeSolution === index ? 'text-blue-100' : 'text-gray-600'
              ]"
            >
              <svg
                class="w-5 h-5 mr-2"
                :class="activeSolution === index ? 'text-blue-200' : 'text-blue-600'"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>

      <div class="text-center">
        <button class="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          咨询解决方案
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solution-card {
  transition: all 0.3s ease;
}
</style>
