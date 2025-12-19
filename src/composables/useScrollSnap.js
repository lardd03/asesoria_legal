// Composable para scroll snap horizontal
import { ref, watch, onMounted } from 'vue'
import { useUIStore } from '../stores/ui'

export function useScrollSnap(containerRef) {
  const uiStore = useUIStore()
  const isSnapping = ref(false)

  const snapToSection = (sectionIndex) => {
    if (!containerRef.value) return
    
    isSnapping.value = true
    const sectionWidth = window.innerWidth
    const targetScroll = sectionIndex * sectionWidth
    
    containerRef.value.style.transform = `translateX(-${targetScroll}px)`
    
    setTimeout(() => {
      isSnapping.value = false
    }, 600) // Duración de la transición
  }

  // Watch para cambios en currentSection
  watch(() => uiStore.currentSection, (newSection) => {
    snapToSection(newSection)
  })

  onMounted(() => {
    // Inicializar en la primera sección
    snapToSection(0)
  })

  return {
    isSnapping,
    snapToSection
  }
}
