import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUIStore } from './ui'

export const useNavigationStore = defineStore('navigation', () => {
  // State
  const transitionDirection = ref('left')
  const transitionDuration = ref(600)
  const isSwipeEnabled = ref(true)
  const swipeThreshold = ref(50)
  const keyboardNavEnabled = ref(true)
  const autoScrollEnabled = ref(false)
  const touchStartX = ref(0)
  const touchEndX = ref(0)

  // Getters
  const swipeDistance = computed(() => touchEndX.value - touchStartX.value)
  const isSwipeValid = computed(() => Math.abs(swipeDistance.value) > swipeThreshold.value)

  // Actions
  function setTransitionDirection(dir) {
    if (dir === 'left' || dir === 'right') {
      transitionDirection.value = dir
    }
  }

  function handleSwipeStart(x) {
    if (!isSwipeEnabled.value) return
    touchStartX.value = x
    touchEndX.value = x
  }

  function handleSwipeMove(x) {
    if (!isSwipeEnabled.value) return
    touchEndX.value = x
  }

  function handleSwipeEnd() {
    if (!isSwipeEnabled.value || !isSwipeValid.value) {
      touchStartX.value = 0
      touchEndX.value = 0
      return
    }

    const uiStore = useUIStore()
    
    if (swipeDistance.value > 0) {
      // Swipe derecha - ir a sección anterior
      setTransitionDirection('right')
      uiStore.prevSection()
    } else {
      // Swipe izquierda - ir a siguiente sección
      setTransitionDirection('left')
      uiStore.nextSection()
    }

    // Reset
    touchStartX.value = 0
    touchEndX.value = 0
  }

  function handleKeyPress(event) {
    if (!keyboardNavEnabled.value) return

    const uiStore = useUIStore()

    switch(event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault()
        setTransitionDirection('left')
        uiStore.nextSection()
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault()
        setTransitionDirection('right')
        uiStore.prevSection()
        break
      case 'Home':
        event.preventDefault()
        setTransitionDirection('right')
        uiStore.goToSection(0)
        break
      case 'End':
        event.preventDefault()
        setTransitionDirection('left')
        uiStore.goToSection(uiStore.totalSections - 1)
        break
    }
  }

  function enableKeyboardNav() {
    keyboardNavEnabled.value = true
  }

  function disableKeyboardNav() {
    keyboardNavEnabled.value = false
  }

  return {
    // State
    transitionDirection,
    transitionDuration,
    isSwipeEnabled,
    swipeThreshold,
    keyboardNavEnabled,
    autoScrollEnabled,
    touchStartX,
    touchEndX,
    // Getters
    swipeDistance,
    isSwipeValid,
    // Actions
    setTransitionDirection,
    handleSwipeStart,
    handleSwipeMove,
    handleSwipeEnd,
    handleKeyPress,
    enableKeyboardNav,
    disableKeyboardNav
  }
})
