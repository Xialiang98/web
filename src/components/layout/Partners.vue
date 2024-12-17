<script setup lang="ts">
const partners = [
  { name: '合作伙伴1', logo: '🏢' },
  { name: '合作伙伴2', logo: '🏛️' },
  { name: '合作伙伴3', logo: '🏪' },
  { name: '合作伙伴4', logo: '🏭' },
  { name: '合作伙伴5', logo: '🏢' },
  { name: '合作伙伴6', logo: '🏛️' },
  { name: '合作伙伴7', logo: '🏪' },
  { name: '合作伙伴8', logo: '🏭' }
]
</script>

<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">合作伙伴</h2>
      <p class="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
        携手行业领先企业，共创数字人产业新未来
      </p>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="flex items-center justify-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
        >
          <div class="text-6xl opacity-60 hover:opacity-100 transition-opacity duration-300">
            {{ partner.logo }}
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-gray-600 mb-8">期待与更多优秀企业展开合作</p>
        <button class="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          申请合作
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partner-logo {
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.partner-logo:hover {
  filter: grayscale(0%);
}
</style>
