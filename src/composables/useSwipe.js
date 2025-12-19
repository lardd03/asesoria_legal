// Composable para detectar gestos de swipe
import { ref, onMounted, onUnmounted } from 'vue'
import { useNavigationStore } from '../stores/navigation'

export function useSwipe(elementRef) {
  const navStore = useNavigationStore()
  const isSwiping = ref(false)

  let startX = 0
  let startY = 0
  let currentX = 0
  let currentY = 0

  const handleTouchStart = (e) => {
    if (!navStore.isSwipeEnabled) return
    
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY
    currentX = startX
    currentY = startY
    isSwiping.value = true
    
    navStore.handleSwipeStart(startX)
  }

  const handleTouchMove = (e) => {
    if (!isSwiping.value || !navStore.isSwipeEnabled) return
    
    currentX = e.touches[0].clientX
    currentY = e.touches[0].clientY
    
    const deltaX = Math.abs(currentX - startX)
    const deltaY = Math.abs(currentY - startY)
    
    // Solo procesar si el movimiento es más horizontal que vertical
    if (deltaX > deltaY) {
      e.preventDefault()
      navStore.handleSwipeMove(currentX)
    }
  }

  const handleTouchEnd = () => {
    if (!isSwiping.value || !navStore.isSwipeEnabled) return
    
    isSwiping.value = false
    navStore.handleSwipeEnd()
  }

  // Mouse events para desktop (opcional)
  const handleMouseDown = (e) => {
    if (!navStore.isSwipeEnabled) return
    
    startX = e.clientX
    isSwiping.value = true
    navStore.handleSwipeStart(startX)
  }

  const handleMouseMove = (e) => {
    if (!isSwiping.value || !navStore.isSwipeEnabled) return
    
    currentX = e.clientX
    navStore.handleSwipeMove(currentX)
  }

  const handleMouseUp = () => {
    if (!isSwiping.value || !navStore.isSwipeEnabled) return
    
    isSwiping.value = false
    navStore.handleSwipeEnd()
  }

  onMounted(() => {
    const element = elementRef?.value || document.body
    
    // Touch events
    element.addEventListener('touchstart', handleTouchStart, { passive: false })
    element.addEventListener('touchmove', handleTouchMove, { passive: false })
    element.addEventListener('touchend', handleTouchEnd)
    
    // Mouse events (opcional para desktop)
    // element.addEventListener('mousedown', handleMouseDown)
    // document.addEventListener('mousemove', handleMouseMove)
    // document.addEventListener('mouseup', handleMouseUp)
  })

  onUnmounted(() => {
    const element = elementRef?.value || document.body
    
    element.removeEventListener('touchstart', handleTouchStart)
    element.removeEventListener('touchmove', handleTouchMove)
    element.removeEventListener('touchend', handleTouchEnd)
    
    // element.removeEventListener('mousedown', handleMouseDown)
    // document.removeEventListener('mousemove', handleMouseMove)
    // document.removeEventListener('mouseup', handleMouseUp)
  })

  return {
    isSwiping
  }
}
