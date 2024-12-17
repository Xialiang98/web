<script setup lang="ts">
const footerLinks = {
  product: {
    title: '产品',
    links: [
      { name: '应用平台', url: '/products/application' },
      { name: '开放平台', url: '/products/open' },
      { name: '解决方案', url: '/solutions' },
      { name: '客户案例', url: '/cases' }
    ]
  },
  support: {
    title: '支持',
    links: [
      { name: '帮助文档', url: '/docs' },
      { name: 'API文档', url: '/api' },
      { name: '开发者社区', url: '/community' },
      { name: '技术支持', url: '/support' }
    ]
  },
  company: {
    title: '公司',
    links: [
      { name: '关于我们', url: '/about' },
      { name: '新闻动态', url: '/news' },
      { name: '加入我们', url: '/careers' },
      { name: '联系我们', url: '/contact' }
    ]
  }
}
</script>

<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Logo and Description -->
        <div>
          <h3 class="text-2xl font-bold mb-4">数字人官网</h3>
          <p class="text-gray-400 mb-6">
            打造专业的数字人解决方案，助力企业数字化转型
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">微信</span>
              📱
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">微博</span>
              💬
            </a>
          </div>
        </div>

        <!-- Footer Links -->
        <template v-for="(section, key) in footerLinks" :key="key">
          <div>
            <h4 class="text-lg font-semibold mb-4">{{ section.title }}</h4>
            <ul class="space-y-2">
              <li v-for="link in section.links" :key="link.name">
                <a :href="link.url" class="text-gray-400 hover:text-white transition-colors">
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
        </template>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © 2024 数字人官网. 保留所有权利
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" class="text-gray-400 hover:text-white text-sm">
              隐私政策
            </a>
            <a href="/terms" class="text-gray-400 hover:text-white text-sm">
              服务条款
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  transition: all 0.3s ease;
}
</style>
