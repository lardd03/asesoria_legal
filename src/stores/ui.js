import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUIStore = defineStore('ui', () => {
  // State
  const theme = ref('dark')
  const isMobileMenuOpen = ref(false)
  const isLoading = ref(false)
  const currentSection = ref(0)
  const totalSections = ref(7)
  const isTransitioning = ref(false)
  const windowWidth = ref(window.innerWidth)
  const isMobile = ref(window.innerWidth < 768)
  const showScrollHint = ref(true)

  // Getters
  const canGoNext = computed(() => currentSection.value < totalSections.value - 1)
  const canGoPrev = computed(() => currentSection.value > 0)
  const sectionProgress = computed(() => 
    Math.round(((currentSection.value + 1) / totalSections.value) * 100)
  )

  // Actions
  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  function setLoading(status) {
    isLoading.value = status
  }

  function setCurrentSection(index) {
    if (index >= 0 && index < totalSections.value && !isTransitioning.value) {
      currentSection.value = index
      hideScrollHint()
    }
  }

  function nextSection() {
    if (canGoNext.value && !isTransitioning.value) {
      currentSection.value++
      hideScrollHint()
    }
  }

  function prevSection() {
    if (canGoPrev.value && !isTransitioning.value) {
      currentSection.value--
      hideScrollHint()
    }
  }

  function goToSection(index) {
    setCurrentSection(index)
  }

  function setTransitioning(status) {
    isTransitioning.value = status
  }

  function updateWindowSize() {
    windowWidth.value = window.innerWidth
    isMobile.value = window.innerWidth < 768
  }

  function hideScrollHint() {
    showScrollHint.value = false
  }

  // Inicializar listener de resize
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWindowSize)
  }

  return {
    // State
    theme,
    isMobileMenuOpen,
    isLoading,
    currentSection,
    totalSections,
    isTransitioning,
    windowWidth,
    isMobile,
    showScrollHint,
    // Getters
    canGoNext,
    canGoPrev,
    sectionProgress,
    // Actions
    toggleMobileMenu,
    setLoading,
    setCurrentSection,
    nextSection,
    prevSection,
    goToSection,
    setTransitioning,
    updateWindowSize,
    hideScrollHint
  }
})
