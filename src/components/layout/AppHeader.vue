<template>
  <header class="app-header" :class="{ scrolled: isScrolled }">
    <div class="header-container">
      <!-- Logo -->
      <a href="#" class="header-logo" @click.prevent="goToSection(0)">
        <i class="bi bi-shield-check logo-icon"></i>
        <div class="logo-text">
          <h1>SOLUCIONES JURIDICAS SJ</h1>
          <p class="logo-subtitle">Tu Defensa Legal Profesional</p>
        </div>
      </a>

      <!-- Navegación Desktop -->
      <nav class="header-nav">
        <div class="nav-links">
          <button 
            v-for="(label, index) in sectionLabels" 
            :key="index"
            :class="{ active: currentSection === index }"
            @click="goToSection(index)"
            class="nav-link-btn"
          >
            {{ label }}
          </button>
        </div>
      </nav>

      <!-- Acciones del header -->
      <div class="header-actions">
        <button class="btn btn-primary btn-sm" @click="goToContact">
          <i class="bi bi-telephone"></i>
          <span class="d-none d-md-inline">Consulta Gratis</span>
        </button>

        <!-- Botón menú móvil -->
        <button 
          class="mobile-menu-btn" 
          :class="{ active: isMobileMenuOpen }"
          @click="toggleMobileMenu"
          aria-label="Toggle mobile menu"
        >
          <i :class="isMobileMenuOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
        </button>
      </div>
    </div>

    <!-- Menú móvil -->
    <transition name="slide-down">
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <div class="mobile-nav-links">
          <button 
            v-for="(label, index) in sectionLabels" 
            :key="index"
            :class="{ active: currentSection === index }"
            @click="goToSectionMobile(index)"
            class="mobile-nav-link-btn"
          >
            {{ label }}
          </button>
        </div>
        
        <div class="mobile-cta">
          <button class="btn btn-primary btn-block" @click="goToContactMobile">
            <i class="bi bi-telephone"></i>
            Consulta Gratis
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useUIStore } from '../../stores/ui'
import { SECTION_LABELS, SECTIONS } from '../../utils/constants'

const uiStore = useUIStore()

const isScrolled = ref(false)

const currentSection = computed(() => uiStore.currentSection)
const isMobileMenuOpen = computed(() => uiStore.isMobileMenuOpen)
const sectionLabels = SECTION_LABELS

const toggleMobileMenu = () => {
  uiStore.toggleMobileMenu()
}

const goToSection = (index) => {
  uiStore.goToSection(index)
}

const goToSectionMobile = (index) => {
  uiStore.goToSection(index)
  uiStore.toggleMobileMenu()
}

const goToContact = () => {
  uiStore.goToSection(SECTIONS.CONTACT)
}

const goToContactMobile = () => {
  uiStore.goToSection(SECTIONS.CONTACT)
  uiStore.toggleMobileMenu()
}

// Detectar scroll para cambiar estilo del header
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link-btn {
  background: none;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: #e0e0e0;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  padding: 0;
}

.nav-link-btn::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #dc3545;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-link-btn:hover,
.nav-link-btn.active {
  color: #dc3545;
}

.nav-link-btn:hover::after,
.nav-link-btn.active::after {
  transform: scaleX(1);
}

.mobile-nav-link-btn {
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  font-size: 1.125rem;
  font-weight: 500;
  color: #e0e0e0;
  padding: 0.75rem 0;
  border-bottom: 1px solid #333333;
  cursor: pointer;
  transition: color 0.3s ease;
}

.mobile-nav-link-btn:hover,
.mobile-nav-link-btn.active {
  color: #dc3545;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
