<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" src="@/assets/logo.svg" alt="数字人官网" />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <RouterLink to="/products" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
              产品矩阵
            </RouterLink>
            <RouterLink to="/pricing" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
              价格
            </RouterLink>
            <RouterLink to="/docs" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
              帮助文档
            </RouterLink>
            <RouterLink to="/contact" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
              合作咨询
            </RouterLink>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <RouterLink
            to="/register"
            class="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            注册
          </RouterLink>
          <RouterLink
            to="/login"
            class="ml-4 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            登录
          </RouterLink>
        </div>
        <div class="flex items-center sm:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
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
    <div :class="[isMenuOpen ? 'block' : 'hidden', 'sm:hidden']">
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
  color: #1a73e8;
  border-bottom: 2px solid #1a73e8;
}
</style>
