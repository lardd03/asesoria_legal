<template>
  <div class="home-view">
    <!-- Header fijo -->
    <AppHeader />
    
    <!-- Navegación -->
    <NavigationDots />
    
    <!-- Contenedor de secciones horizontales -->
    <div 
      ref="sectionsContainer" 
      class="sections-container"
      :style="containerStyle"
    >
      <!-- Sección 1: Hero -->
      <HeroSection />
      
      <!-- Sección 2: About -->
      <AboutSection />
      
      <!-- Sección 3: Partners -->
      <PartnersSection />
      
      <!-- Sección 4: Services -->
      <ServicesSection />
      
      <!-- Sección 5: Coverage -->
      <CoverageSection />
      
      <!-- Sección 6: Testimonials -->
      <TestimonialsSection />
      
      <!-- Sección 7: Contact -->
      <ContactSection />
    </div>
    
    <!-- Footer (visible en última sección o flotante) -->
    <AppFooter v-if="showFooter" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useUIStore } from '../stores/ui'
import { useNavigationStore } from '../stores/navigation'
import { useSwipe } from '../composables/useSwipe'
import { useKeyboardNav } from '../composables/useKeyboardNav'

// Layout components
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import NavigationDots from '../components/layout/NavigationDots.vue'

// Section components
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import PartnersSection from '../components/sections/PartnersSection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import CoverageSection from '../components/sections/CoverageSection.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

const uiStore = useUIStore()
const navStore = useNavigationStore()

const sectionsContainer = ref(null)

// Composables
useSwipe(sectionsContainer)
useKeyboardNav()

// Computed
const currentSection = computed(() => uiStore.currentSection)
const isTransitioning = computed(() => uiStore.isTransitioning)
const showFooter = computed(() => currentSection.value === 6) // Última sección

// Helpers para el efecto de fade por sección
const getSectionOpacity = (index) => currentSection.value === index ? '1' : '0.3'

// Computed para opacidades de cada sección
const section0Opacity = computed(() => getSectionOpacity(0))
const section1Opacity = computed(() => getSectionOpacity(1))
const section2Opacity = computed(() => getSectionOpacity(2))
const section3Opacity = computed(() => getSectionOpacity(3))
const section4Opacity = computed(() => getSectionOpacity(4))
const section5Opacity = computed(() => getSectionOpacity(5))
const section6Opacity = computed(() => getSectionOpacity(6))

const containerStyle = computed(() => {
  const translateX = -currentSection.value * 100
  return {
    // Ancho total igual al número de secciones (para permitir el deslizamiento horizontal)
    width: `${uiStore.totalSections * 100}vw`,
    transform: `translateX(${translateX}vw)`,
    transition: isTransitioning.value ? 'none' : `transform ${navStore.transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
  }
})

// Watch para manejar transiciones
watch(currentSection, () => {
  uiStore.setTransitioning(true)
  
  setTimeout(() => {
    uiStore.setTransitioning(false)
  }, navStore.transitionDuration)
})

onMounted(() => {
  // Inicializar en la primera sección
  uiStore.setCurrentSection(0)
})
</script>

<style scoped>
.home-view {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.sections-container {
  display: flex;
  width: 100%;
  height: 100vh;
  will-change: transform;
}

/* Cada sección ocupa el 100% del viewport */
.sections-container > * {
  flex-shrink: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.3;
  transition: opacity 0.6s ease-in-out;
}

/* Sección activa con fade in */
.sections-container > *:nth-child(1) { opacity: v-bind(section0Opacity); }
.sections-container > *:nth-child(2) { opacity: v-bind(section1Opacity); }
.sections-container > *:nth-child(3) { opacity: v-bind(section2Opacity); }
.sections-container > *:nth-child(4) { opacity: v-bind(section3Opacity); }
.sections-container > *:nth-child(5) { opacity: v-bind(section4Opacity); }
.sections-container > *:nth-child(6) { opacity: v-bind(section5Opacity); }
.sections-container > *:nth-child(7) { opacity: v-bind(section6Opacity); }
</style>
