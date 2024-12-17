<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const navItems = ref([
  { text: '产品服务', href: '#' },
  { text: '价格', href: '#' },
  { text: '解决方案', href: '#' },
  { text: '合作案例', href: '#' }
])
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-gray-900">百度智能云真灵</h1>
        </div>

        <nav class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navItems"
            :key="item.text"
            :href="item.href"
            class="text-gray-700 hover:text-primary transition-colors text-lg"
          >
            {{ item.text }}
          </a>
        </nav>

        <div class="flex items-center space-x-6">
          <button class="text-gray-700 hover:text-primary transition-colors text-lg">
            注册
          </button>
          <button class="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-lg">
            登录
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
