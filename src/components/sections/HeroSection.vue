<template>
  <section class="hero-section">
    <!-- 3D Background Canvas -->
    <canvas id="canvas3d" class="hero-3d-canvas"></canvas>
    
    <!-- Background Elements -->
    <div class="hero-bg-overlay"></div>
    <div class="hero-bg-pattern"></div>

    <div class="section-content">
      <div class="hero-grid">
        <!-- Left Column: Content -->
        <div class="hero-text-content">
          <div class="hero-badge-wrapper">
            <span class="hero-badge-text">
              <i class="bi bi-star-fill"></i> Excelencia Legal
            </span>
          </div>
          
          <h1 class="hero-title">
            {{ firm.name }}
            <span class="hero-subtitle-block">{{ firm.slogan }}</span>
          </h1>
          
          <p class="hero-description">
            Especialistas en derecho con cobertura en toda la República Mexicana. 
            Protegemos tus derechos con estrategia, ética y resultados comprobados.
          </p>
          
          <div class="hero-actions">
            <CTAButton
              text="Consulta Gratis"
              variant="primary"
              size="lg"
              icon="telephone-fill"
              @click="goToContact"
              class="hero-btn"
            />
            <CTAButton
              text="Nuestros Servicios"
              variant="outline"
              size="lg"
              icon="arrow-right"
              @click="goToServices"
              class="hero-btn"
            />
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">10+</span>
              <span class="stat-label">Años de Experiencia</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Compromiso</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Atención</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Visual -->
        <div class="hero-visual-content">
          <div class="visual-composition">
            <div class="circle-bg"></div>
            <div class="icon-container">
              <i class="bi bi-shield-check main-icon"></i>
            </div>
            <!-- Floating Areas of Practice -->
            <div class="floating-pill pill-1">Civil</div>
            <div class="floating-pill pill-2">Penal</div>
            <div class="floating-pill pill-3">Laboral</div>
            <div class="floating-pill pill-4">Administrativo</div>
            <div class="floating-pill pill-5">Familiar</div>
            <div class="floating-pill pill-6">Aduanal</div>
            <div class="floating-pill pill-7">Amparos</div>
            <div class="floating-pill pill-8">Asesoría Fiscal</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useContentStore } from '../../stores/content'
import { useUIStore } from '../../stores/ui'
import { SECTIONS } from '../../utils/constants'
import CTAButton from '../ui/CTAButton.vue'
import { Application } from '@splinetool/runtime'

const contentStore = useContentStore()
const uiStore = useUIStore()

const firm = computed(() => contentStore.firm)

const goToContact = () => {
  uiStore.goToSection(SECTIONS.CONTACT)
}

const goToServices = () => {
  uiStore.goToSection(SECTIONS.SERVICES)
}

// Initialize 3D Scene
onMounted(() => {
  const canvas = document.getElementById('canvas3d')
  if (canvas) {
    const app = new Application(canvas)
    app.load('https://prod.spline.design/dUZqliHD2IixzH2m/scene.splinecode')
  }
})
</script>

<style scoped lang="scss">
.hero-section {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 8rem 0 4rem; // Top padding for header
  overflow: hidden;
  background-color: var(--bg-primary, #0a0a0a);
}

.hero-3d-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; // Full viewport height
  z-index: 0;
  opacity: 0.9; // More visible 3D effect
  pointer-events: none; // Don't interfere with interactions
}

.hero-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(220, 53, 69, 0.15) 0%, transparent 60%),
              linear-gradient(to bottom, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.8) 100%);
  z-index: 1;
  mix-blend-mode: normal; // Ensures gradient overlays 3D properly
}

.hero-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: 0;
  opacity: 0.5;
}

.section-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media (min-width: 992px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

// Left Column Styles
.hero-text-content {
  text-align: left;
}

.hero-badge-wrapper {
  display: inline-block;
  margin-bottom: 1.5rem;
}

.hero-badge-text {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(220, 53, 69, 0.1);
  border: 1px solid rgba(220, 53, 69, 0.3);
  border-radius: 50px;
  color: var(--accent-primary, #dc3545);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  i {
    font-size: 1rem;
  }
}

.hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: 1.5rem;
  
  .hero-subtitle-block {
    display: block;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 400;
    color: var(--accent-primary, #dc3545);
    margin-top: 0.5rem;
  }
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary, #e0e0e0);
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 576px) {
    flex-direction: row;
  }
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  .stat-item {
    display: flex;
    flex-direction: column;
    
    .stat-number {
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
    }
    
    .stat-label {
      font-size: 0.875rem;
      color: var(--text-muted, #a0a0a0);
    }
  }
  
  .stat-divider {
    width: 1px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
  }
}

// Right Column Styles (Visual)
.hero-visual-content {
  display: none; // Hidden on mobile by default or adjust as needed
  
  @media (min-width: 992px) {
    display: block;
    position: relative;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.visual-composition {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-bg {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(220, 53, 69, 0.1) 0%, transparent 70%);
  border: 1px solid rgba(220, 53, 69, 0.2);
  animation: pulse 4s infinite ease-in-out;
}

.icon-container {
  position: relative;
  z-index: 2;
  
  .main-icon {
    font-size: 12rem;
    background: linear-gradient(135deg, #ffffff 0%, #666666 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
  }
}

.floating-pill {
  position: absolute;
  background: rgba(20, 20, 20, 0.9);
  backdrop-filter: blur(8px);
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e0e0e0;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  z-index: 3;
  animation: float 6s ease-in-out infinite;
  transition: all 0.3s ease;
  --tx: 0;

  &:hover {
    background: rgba(220, 53, 69, 0.15);
    border-color: var(--accent-primary, #dc3545);
    color: #fff;
    transform: scale(1.05);
    cursor: default;
    z-index: 4;
  }
  
  // Positioning around the circle
  &.pill-1 { top: 5%; left: 50%; --tx: -50%; animation-delay: 0s; }
  &.pill-2 { top: 15%; right: 5%; animation-delay: 1s; }
  &.pill-3 { top: 45%; right: -5%; animation-delay: 2s; }
  &.pill-4 { bottom: 15%; right: 5%; animation-delay: 3s; }
  &.pill-5 { bottom: 5%; left: 50%; --tx: -50%; animation-delay: 4s; }
  &.pill-6 { bottom: 15%; left: 5%; animation-delay: 5s; }
  &.pill-7 { top: 45%; left: -5%; animation-delay: 1.5s; }
  &.pill-8 { top: 15%; left: 5%; animation-delay: 3.5s; }
}

// Animations
@keyframes float {
  0%, 100% { transform: translateY(0) translateX(var(--tx)); }
  50% { transform: translateY(-15px) translateX(var(--tx)); }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
}
</style>
