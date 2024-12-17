<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
const isAtTop = ref(true)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isAtTop.value = window.scrollY < 50
  })
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[
      isAtTop ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm shadow-md',
      isAtTop ? 'text-white' : 'text-gray-900'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" src="@/assets/logo.svg" :class="{'filter invert': isAtTop}" alt="数字人官网" />
          </div>
          <div class="hidden lg:ml-10 lg:flex lg:space-x-12">
            <RouterLink
              v-for="(item, index) in [
                { to: '/products', text: '产品矩阵' },
                { to: '/pricing', text: '价格' },
                { to: '/docs', text: '帮助文档' },
                { to: '/contact', text: '合作咨询' }
              ]"
              :key="index"
              :to="item.to"
              class="inline-flex items-center px-1 py-2 text-base font-medium hover:opacity-80 transition-opacity"
              :class="[isAtTop ? 'text-white' : 'text-gray-900']"
            >
              {{ item.text }}
            </RouterLink>
          </div>
        </div>

        <div class="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
          <RouterLink
            to="/register"
            class="inline-flex items-center px-6 py-2 text-sm font-medium rounded-full transition-all duration-300"
            :class="[
              isAtTop
                ? 'bg-white/20 text-white hover:bg-white/30'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            ]"
          >
            免费试用
          </RouterLink>
          <RouterLink
            to="/login"
            class="inline-flex items-center px-6 py-2 text-sm font-medium rounded-full transition-all duration-300"
            :class="[
              isAtTop
                ? 'border border-white/50 text-white hover:bg-white/10'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
            ]"
          >
            登录
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center lg:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md"
            :class="[isAtTop ? 'text-white' : 'text-gray-500']"
          >
            <span class="sr-only">打开菜单</span>
            <svg
              :class="[isMenuOpen ? 'hidden' : 'block', 'h-6 w-6']"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              :class="[isMenuOpen ? 'block' : 'hidden', 'h-6 w-6']"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      :class="[isMenuOpen ? 'block' : 'hidden', 'lg:hidden']"
      class="bg-white shadow-lg"
    >
      <div class="pt-2 pb-3 space-y-1">
        <RouterLink
          to="/products"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          产品矩阵
        </RouterLink>
        <RouterLink
          to="/pricing"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          价格
        </RouterLink>
        <RouterLink
          to="/docs"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          帮助文档
        </RouterLink>
        <RouterLink
          to="/contact"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          合作咨询
        </RouterLink>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="space-y-1">
          <RouterLink
            to="/register"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >
            注册
          </RouterLink>
          <RouterLink
            to="/login"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >
            登录
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  position: relative;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform-origin: right;
  transform: scaleX(1);
  transition: transform 0.3s ease;
}

@media (min-width: 1024px) {
  .router-link-active::after {
    transform-origin: left;
  }
}
</style>
