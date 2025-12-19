<template>
  <section class="section section-coverage section-pattern">
    <!-- Decorative Elements -->
    <div class="coverage-bg-pattern"></div>
    <div class="coverage-glow coverage-glow--center"></div>
    
    <div class="section-content coverage-wrapper">
      <!-- Header -->
      <div class="coverage-header">
        <div class="coverage-badge">
          <i class="bi bi-globe-americas"></i>
          <span>Alcance Nacional</span>
        </div>
        <h2 class="coverage-main-title">
          Cobertura <span class="accent">Nacional</span>
        </h2>
        <p class="coverage-main-subtitle">
          Representación legal profesional en toda la República Mexicana
        </p>
        <div class="coverage-title-line"></div>
      </div>
      
      <!-- Main Content -->
      <div class="coverage-content">
        <!-- Left: Map Visual -->
        <div class="coverage-visual">
          <div class="coverage-map-container">
            <div class="coverage-map-glow"></div>
            <div class="coverage-map-icon">
              <img 
                src="/icons/mapa.png" 
                alt="Mapa de México" 
                class="mexico-map-svg"
              />
            </div>
            <div class="coverage-map-rings">
              <div class="ring ring--1"></div>
              <div class="ring ring--2"></div>
              <div class="ring ring--3"></div>
            </div>
          </div>
          <div class="coverage-label">
            <i class="bi bi-check-circle-fill"></i>
            <span>{{ contact.coverage }}</span>
          </div>
        </div>
        
        <!-- Right: Features -->
        <div class="coverage-features">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="feature-card"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <div class="feature-card__icon">
              <i :class="`bi ${feature.icon}`"></i>
            </div>
            <div class="feature-card__content">
              <h4 class="feature-card__title">{{ feature.title }}</h4>
              <p class="feature-card__desc">{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="coverage-cta">
        <div class="coverage-cta__info">
          <i class="bi bi-shield-fill-check"></i>
          <span>Más de 15 años protegiendo tus derechos en todo México</span>
        </div>
        <CTAButton
          text="Agenda tu Consulta"
          variant="primary"
          size="lg"
          icon="calendar-check"
          @click="goToContact"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useContentStore } from '../../stores/content'
import { useUIStore } from '../../stores/ui'
import { SECTIONS } from '../../utils/constants'
import CTAButton from '../ui/CTAButton.vue'

const contentStore = useContentStore()
const uiStore = useUIStore()

const contact = computed(() => contentStore.contact)

const features = ref([
  {
    icon: 'bi-geo-alt-fill',
    title: 'Todos los Estados',
    desc: 'Presencia en las 32 entidades'
  },
  {
    icon: 'bi-building',
    title: 'Tribunales Federales',
    desc: 'Representación especializada'
  },
  {
    icon: 'bi-laptop',
    title: 'Asesoría Remota',
    desc: 'Consultas en línea disponibles'
  },
  {
    icon: 'bi-people-fill',
    title: 'Red de Abogados',
    desc: 'Colaboradores en cada región'
  }
])

const goToContact = () => {
  uiStore.goToSection(SECTIONS.CONTACT)
}
</script>

<style scoped>
.section-coverage {
  position: relative;
  overflow: hidden;
}

/* Background */
.coverage-bg-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(220, 53, 69, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(220, 53, 69, 0.02) 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(220, 53, 69, 0.02) 0%, transparent 40%);
  pointer-events: none;
}

.coverage-glow--center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(220, 53, 69, 0.08) 0%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
}

/* Wrapper */
.coverage-wrapper {
  position: relative;
  z-index: 1;
}

/* Header */
.coverage-header {
  text-align: center;
  margin-bottom: 2rem;
}

.coverage-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: rgba(220, 53, 69, 0.1);
  border: 1px solid rgba(220, 53, 69, 0.2);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-primary, #dc3545);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.coverage-badge i {
  font-size: 0.875rem;
}

.coverage-main-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary, #fff);
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.coverage-main-title .accent {
  color: var(--accent-primary, #dc3545);
}

.coverage-main-subtitle {
  font-size: 1rem;
  color: var(--text-muted, #a0a0a0);
  max-width: 450px;
  margin: 0 auto 1rem;
}

.coverage-title-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary, #dc3545), transparent);
  margin: 0 auto;
  border-radius: 2px;
}

/* Main Content */
.coverage-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .coverage-content {
    grid-template-columns: 1fr 1.2fr;
    gap: 3rem;
  }
}

/* Visual/Map */
.coverage-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.coverage-map-container {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.coverage-map-glow {
  position: absolute;
  inset: -40px;
  background: radial-gradient(circle, rgba(220, 53, 69, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulseGlow 3s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

.coverage-map-icon {
  position: relative;
  z-index: 2;
  width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, rgba(30, 30, 30, 0.9), rgba(20, 20, 20, 0.95));
  border: 3px solid rgba(220, 53, 69, 0.3);
  border-radius: 50%;
  box-shadow: 
    0 0 50px rgba(220, 53, 69, 0.25),
    inset 0 0 40px rgba(220, 53, 69, 0.05);
  padding: 40px;
}

.mexico-map-svg {
  width: 280%;
  height: auto;
  max-width: none;
  filter: drop-shadow(0 0 8px rgba(220, 53, 69, 0.4));
  transition: all 0.3s ease;
}

.coverage-map-container:hover .mexico-map-svg {
  filter: drop-shadow(0 0 12px rgba(220, 53, 69, 0.6));
  transform: scale(1.05);
}

.coverage-map-rings {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(220, 53, 69, 0.2);
  border-radius: 50%;
  animation: ringPulse 3s ease-out infinite;
}

.ring--1 {
  width: 340px;
  height: 340px;
  animation-delay: 0s;
}

.ring--2 {
  width: 370px;
  height: 370px;
  animation-delay: 1s;
}

.ring--3 {
  width: 400px;
  height: 400px;
  animation-delay: 2s;
}

@keyframes ringPulse {
  0% { opacity: 0.6; transform: translate(-50%, -50%) scale(0.8); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1.2); }
}

.coverage-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(220, 53, 69, 0.15), rgba(220, 53, 69, 0.05));
  border: 1px solid rgba(220, 53, 69, 0.3);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary, #fff);
}

.coverage-label i {
  color: var(--accent-primary, #dc3545);
}

/* Features */
.coverage-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: linear-gradient(145deg, rgba(30, 30, 30, 0.8), rgba(20, 20, 20, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.feature-card:hover {
  transform: translateY(-3px);
  border-color: rgba(220, 53, 69, 0.3);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.feature-card__icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(220, 53, 69, 0.2), rgba(220, 53, 69, 0.1));
  border-radius: 10px;
  flex-shrink: 0;
}

.feature-card__icon i {
  font-size: 1.125rem;
  color: var(--accent-primary, #dc3545);
}

.feature-card__content {
  flex: 1;
  min-width: 0;
}

.feature-card__title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary, #fff);
  margin-bottom: 0.25rem;
}

.feature-card__desc {
  font-size: 0.75rem;
  color: var(--text-muted, #a0a0a0);
  line-height: 1.4;
}

/* CTA */
.coverage-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(20, 20, 20, 0.95));
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  flex-wrap: wrap;
}

.coverage-cta__info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--text-secondary, #e0e0e0);
}

.coverage-cta__info i {
  font-size: 1.25rem;
  color: var(--accent-primary, #dc3545);
}

/* Responsive */
@media (max-width: 767px) {
  .coverage-header {
    margin-bottom: 1.5rem;
  }
  
  .coverage-content {
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .coverage-map-container {
    width: 280px;
    height: 280px;
  }
  
  .coverage-map-icon {
    width: 220px;
    height: 220px;
    padding: 30px;
  }
  
  .ring--1 { width: 240px; height: 240px; }
  .ring--2 { width: 260px; height: 260px; }
  .ring--3 { width: 280px; height: 280px; }
  
  .coverage-features {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .feature-card {
    padding: 0.875rem;
  }
  
  .coverage-cta {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
  }
  
  .coverage-cta__info {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
