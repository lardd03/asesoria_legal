<template>
  <section class="section section-services section-dark">
    <!-- Decorative Elements -->
    <div class="services-bg-pattern"></div>
    <div class="services-glow services-glow--left"></div>
    <div class="services-glow services-glow--right"></div>
    
    <div class="section-content services-content">
      <!-- Header compacto -->
      <div class="services-header">
        <div class="services-badge">
          <i class="bi bi-shield-check"></i>
          <span>Experiencia Comprobada</span>
        </div>
        <h2 class="services-title">
          Áreas de <span class="accent">Práctica</span>
        </h2>
        <p class="services-subtitle">
          Soluciones legales integrales respaldadas por años de experiencia
        </p>
        <div class="services-title-line"></div>
      </div>
      
      <!-- Grid de servicios mejorado -->
      <div class="services-grid">
        <article 
          v-for="(service, index) in services" 
          :key="service.id"
          class="service-item"
          :style="{ '--delay': `${index * 0.05}s` }"
        >
          <div class="service-item__icon-wrapper">
            <div class="service-item__icon-bg"></div>
            <img src="/icons/mazo.png" alt="" class="service-item__icon-img" />
          </div>
          <div class="service-item__content">
            <h3 class="service-item__title">{{ service.name }}</h3>
            <p class="service-item__description">{{ service.description }}</p>
          </div>
          <div class="service-item__hover-line"></div>
        </article>
      </div>
      
      <!-- CTA mejorado -->
      <div class="services-cta">
        <div class="services-cta__content">
          <div class="services-cta__icon">
            <i class="bi bi-headset"></i>
          </div>
          <div class="services-cta__text">
            <p class="services-cta__label">¿Necesitas asesoría especializada?</p>
            <p class="services-cta__desc">Nuestro equipo está listo para ayudarte</p>
          </div>
        </div>
        <CTAButton
          text="Consulta Gratuita"
          variant="primary"
          size="lg"
          icon="telephone"
          @click="goToContact"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useContentStore } from '../../stores/content'
import { useUIStore } from '../../stores/ui'
import { SECTIONS } from '../../utils/constants'
import CTAButton from '../ui/CTAButton.vue'

const contentStore = useContentStore()
const uiStore = useUIStore()

const services = computed(() => contentStore.services)

const goToContact = () => {
  uiStore.goToSection(SECTIONS.CONTACT)
}
</script>

<style scoped>
.section-services {
  position: relative;
  overflow: hidden;
}

/* Background Pattern */
.services-bg-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(220, 53, 69, 0.03) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(220, 53, 69, 0.03) 0%, transparent 40%);
  pointer-events: none;
}

.services-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
  pointer-events: none;
}

.services-glow--left {
  top: 20%;
  left: -200px;
  background: var(--accent-primary, #dc3545);
}

.services-glow--right {
  bottom: 20%;
  right: -200px;
  background: var(--accent-primary, #dc3545);
}

/* Content */
.services-content {
  position: relative;
  z-index: 1;
}

/* Header */
.services-header {
  text-align: center;
  margin-bottom: 2rem;
}

.services-badge {
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

.services-badge i {
  font-size: 0.875rem;
}

.services-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary, #fff);
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.services-title .accent {
  color: var(--accent-primary, #dc3545);
}

.services-subtitle {
  font-size: 1rem;
  color: var(--text-muted, #a0a0a0);
  max-width: 500px;
  margin: 0 auto 1rem;
}

.services-title-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary, #dc3545), transparent);
  margin: 0 auto;
  border-radius: 2px;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Service Item */
.service-item {
  position: relative;
  background: linear-gradient(145deg, rgba(30, 30, 30, 0.8), rgba(20, 20, 20, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.25rem 1rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, rgba(220, 53, 69, 0.05), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-item:hover {
  transform: translateY(-4px);
  border-color: rgba(220, 53, 69, 0.3);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(220, 53, 69, 0.1);
}

.service-item:hover::before {
  opacity: 1;
}

.service-item__hover-line {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-primary, #dc3545), transparent);
  transition: width 0.3s ease;
}

.service-item:hover .service-item__hover-line {
  width: 80%;
}

/* Icon */
.service-item__icon-wrapper {
  position: relative;
  width: 56px;
  height: 56px;
  margin: 0 auto 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-item__icon-bg {
  position: absolute;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(220, 53, 69, 0.25), rgba(220, 53, 69, 0.1));
  border: 1px solid rgba(220, 53, 69, 0.2);
  border-radius: 10px;
  transform: rotate(45deg);
  transition: all 0.3s ease;
}

.service-item:hover .service-item__icon-bg {
  transform: rotate(45deg) scale(1.15);
  background: linear-gradient(135deg, rgba(220, 53, 69, 0.35), rgba(220, 53, 69, 0.15));
  border-color: rgba(220, 53, 69, 0.4);
  box-shadow: 0 0 20px rgba(220, 53, 69, 0.2);
}

.service-item__icon {
  position: relative;
  z-index: 2;
  font-size: 1.5rem;
  color: var(--accent-primary, #dc3545);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 10px rgba(220, 53, 69, 0.3);
}

.service-item__icon-img {
  position: relative;
  z-index: 2;
  width: 28px;
  height: 28px;
  object-fit: contain;
  filter: invert(27%) sepia(89%) saturate(2074%) hue-rotate(336deg) brightness(87%) contrast(95%);
  transition: all 0.3s ease;
}

.service-item:hover .service-item__icon-img {
  transform: scale(1.15);
  filter: invert(27%) sepia(89%) saturate(2074%) hue-rotate(336deg) brightness(100%) contrast(95%);
}

.service-item:hover .service-item__icon {
  transform: scale(1.15);
  color: #ff4d5e;
  text-shadow: 0 0 15px rgba(220, 53, 69, 0.5);
}

/* Content */
.service-item__content {
  position: relative;
  z-index: 1;
}

.service-item__title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary, #fff);
  margin-bottom: 0.4rem;
  line-height: 1.3;
}

.service-item__description {
  font-size: 0.75rem;
  color: var(--text-muted, #a0a0a0);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* CTA Section */
.services-cta {
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

.services-cta__content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.services-cta__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-primary, #dc3545), rgba(220, 53, 69, 0.8));
  border-radius: 12px;
  font-size: 1.25rem;
  color: white;
  flex-shrink: 0;
}

.services-cta__text {
  text-align: left;
}

.services-cta__label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary, #fff);
  margin-bottom: 0.125rem;
}

.services-cta__desc {
  font-size: 0.875rem;
  color: var(--text-muted, #a0a0a0);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .services-header {
    margin-bottom: 1.5rem;
  }
  
  .services-grid {
    gap: 0.75rem;
  }
  
  .service-item {
    padding: 1rem 0.75rem;
  }
  
  .service-item__icon-wrapper {
    width: 48px;
    height: 48px;
    margin-bottom: 0.5rem;
  }
  
  .service-item__icon-bg {
    width: 32px;
    height: 32px;
  }
  
  .service-item__icon {
    font-size: 1.25rem;
  }
  
  .service-item__title {
    font-size: 0.8rem;
  }
  
  .service-item__description {
    font-size: 0.7rem;
    -webkit-line-clamp: 2;
  }
  
  .services-cta {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1rem;
  }
  
  .services-cta__content {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .services-cta__text {
    text-align: center;
  }
}
</style>
