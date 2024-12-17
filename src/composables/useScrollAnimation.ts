import { onMounted } from 'vue'

export function useScrollAnimation() {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    )

    document.querySelectorAll('[data-scroll]').forEach(el => {
      observer.observe(el)
    })
  })
}
