<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const opacity = ref(0)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

onMounted(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY
    isScrolled.value = scrollY > 100
    opacity.value = Math.min(scrollY / 200, 0.95)
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-[var(--z-sticky)] transition-all duration-300"
    :class="[
      isScrolled ? 'backdrop-blur-sm' : '',
      'h-20'
    ]"
    :style="{
      backgroundColor: isScrolled ? `rgba(10, 25, 41, ${opacity})` : 'transparent',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
    }"
  >
    <div class="content-container h-full">
      <div class="flex justify-between items-center h-full">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-8 w-auto transition-all duration-300"
              src="@/assets/logo.svg"
              :class="{'filter invert': !isScrolled}"
              alt="数字人官网"
            />
          </div>
          <div class="hidden lg:ml-16 lg:flex lg:space-x-12">
            <RouterLink
              v-for="(item, index) in [
                { to: '/products', text: '产品矩阵' },
                { to: '/pricing', text: '价格' },
                { to: '/docs', text: '帮助文档' },
                { to: '/contact', text: '合作咨询' }
              ]"
              :key="index"
              :to="item.to"
              class="inline-flex items-center px-1 py-2 text-base font-medium transition-all duration-300"
              :class="[
                isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-white/80'
              ]"
            >
              {{ item.text }}
            </RouterLink>
          </div>
        </div>

        <div class="hidden lg:ml-8 lg:flex lg:items-center lg:space-x-6">
          <RouterLink
            to="/register"
            class="inline-flex items-center px-8 py-2.5 text-sm font-medium rounded-full transition-all duration-300"
            :class="[
              isScrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white/10 text-white hover:bg-white/20'
            ]"
          >
            免费试用
          </RouterLink>
          <RouterLink
            to="/login"
            class="inline-flex items-center px-8 py-2.5 text-sm font-medium rounded-full transition-all duration-300"
            :class="[
              isScrolled
                ? 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                : 'border border-white/30 text-white hover:bg-white/10'
            ]"
          >
            登录
          </RouterLink>
        </div>

        <div class="flex items-center lg:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md"
            :class="[isScrolled ? 'text-gray-500' : 'text-white']"
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

    <div
      :class="[isMenuOpen ? 'translate-x-0' : 'translate-x-full', 'lg:hidden']"
      class="fixed top-20 right-0 bottom-0 w-full bg-white/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-[var(--z-drawer)]"
    >
      <div class="h-full overflow-y-auto">
        <div class="px-4 py-6 space-y-6">
          <div class="space-y-4">
            <RouterLink
              v-for="(item, index) in [
                { to: '/products', text: '产品矩阵' },
                { to: '/pricing', text: '价格' },
                { to: '/docs', text: '帮助文档' },
                { to: '/contact', text: '合作咨询' }
              ]"
              :key="index"
              :to="item.to"
              class="block py-3 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
              @click="toggleMenu"
            >
              {{ item.text }}
            </RouterLink>
          </div>
          <div class="pt-6 border-t border-gray-200 space-y-4">
            <RouterLink
              to="/register"
              class="block w-full py-3 px-4 rounded-full text-center font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              @click="toggleMenu"
            >
              免费试用
            </RouterLink>
            <RouterLink
              to="/login"
              class="block w-full py-3 px-4 rounded-full text-center font-medium text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              @click="toggleMenu"
            >
              登录
            </RouterLink>
          </div>
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
