// Composable para navegación con teclado
import { onMounted, onUnmounted } from 'vue'
import { useNavigationStore } from '../stores/navigation'

export function useKeyboardNav() {
  const navStore = useNavigationStore()

  const handleKeyDown = (event) => {
    if (!navStore.keyboardNavEnabled) return
    
    // Ignorar si el usuario está escribiendo en un input
    const activeElement = document.activeElement
    const isTyping = activeElement.tagName === 'INPUT' || 
                     activeElement.tagName === 'TEXTAREA' ||
                     activeElement.isContentEditable

    if (isTyping) return

    navStore.handleKeyPress(event)
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
  })

  return {
    enableKeyboard: navStore.enableKeyboardNav,
    disableKeyboard: navStore.disableKeyboardNav
  }
}
