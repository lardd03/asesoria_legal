<template>
  <section class="section section-testimonials section-dark">
    <!-- Decorative Elements -->
    <div class="testimonials-bg-pattern"></div>
    <div class="testimonials-glow testimonials-glow--left"></div>
    <div class="testimonials-glow testimonials-glow--right"></div>
    
    <div class="section-content testimonials-wrapper">
      <!-- Header -->
      <div class="testimonials-header">
        <div class="testimonials-badge">
          <i class="bi bi-chat-quote"></i>
          <span>Clientes Satisfechos</span>
        </div>
        <h2 class="testimonials-title">
          Lo Que Dicen <span class="accent">Nuestros Clientes</span>
        </h2>
        <p class="testimonials-subtitle">
          Resultados comprobados que respaldan nuestra experiencia
        </p>
        <div class="testimonials-title-line"></div>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="testimonials-container">
        <div v-if="testimonials.length > 0" class="testimonials-grid">
          <article 
            v-for="(testimonial, index) in testimonials" 
            :key="testimonial.id"
            class="testimonial-card"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <!-- Quote Icon -->
            <div class="testimonial-quote">
              <i class="bi bi-quote"></i>
            </div>
            
            <!-- Rating -->
            <div class="testimonial-rating">
              <i v-for="n in testimonial.rating" :key="n" class="bi bi-star-fill"></i>
            </div>
            
            <!-- Text -->
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            
            <!-- Author -->
            <div class="testimonial-author">
              <div class="testimonial-author__avatar">
                <i class="bi bi-person-fill"></i>
              </div>
              <div class="testimonial-author__info">
                <p class="testimonial-author__name">{{ testimonial.name }}</p>
                <p class="testimonial-author__case">
                  <i class="bi bi-briefcase-fill"></i>
                  {{ testimonial.case }}
                </p>
              </div>
            </div>
            
            <!-- Decorative Line -->
            <div class="testimonial-hover-line"></div>
          </article>
        </div>
        
        <div v-else class="no-testimonials">
          <div class="no-testimonials__icon">
            <i class="bi bi-chat-square-quote"></i>
          </div>
          <p>Muy pronto tendremos testimonios de nuestros clientes satisfechos.</p>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="testimonials-cta">
        <div class="testimonials-cta__content">
          <div class="testimonials-cta__icon">
            <i class="bi bi-trophy"></i>
          </div>
          <div class="testimonials-cta__text">
            <p class="testimonials-cta__label">¿Listo para obtener los mismos resultados?</p>
            <p class="testimonials-cta__desc">Únete a nuestros clientes satisfechos</p>
          </div>
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
import { computed } from 'vue'
import { useContentStore } from '../../stores/content'
import { useUIStore } from '../../stores/ui'
import { SECTIONS } from '../../utils/constants'
import CTAButton from '../ui/CTAButton.vue'

const contentStore = useContentStore()
const uiStore = useUIStore()

const testimonials = computed(() => contentStore.testimonials)

const goToContact = () => {
  uiStore.goToSection(SECTIONS.CONTACT)
}
</script>

<style scoped>
.section-testimonials {
  position: relative;
  overflow: hidden;
}

/* Background */
.testimonials-bg-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(220, 53, 69, 0.03) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(220, 53, 69, 0.03) 0%, transparent 40%);
  pointer-events: none;
}

.testimonials-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.12;
  pointer-events: none;
}

.testimonials-glow--left {
  top: 30%;
  left: -200px;
  background: var(--accent-primary, #dc3545);
}

.testimonials-glow--right {
  bottom: 30%;
  right: -200px;
  background: var(--accent-primary, #dc3545);
}

/* Wrapper */
.testimonials-wrapper {
  position: relative;
  z-index: 1;
}

/* Header */
.testimonials-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.testimonials-badge {
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

.testimonials-badge i {
  font-size: 0.875rem;
}

.testimonials-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary, #fff);
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.testimonials-title .accent {
  color: var(--accent-primary, #dc3545);
}

.testimonials-subtitle {
  font-size: 1rem;
  color: var(--text-muted, #a0a0a0);
  max-width: 450px;
  margin: 0 auto 1rem;
}

.testimonials-title-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary, #dc3545), transparent);
  margin: 0 auto;
  border-radius: 2px;
}

/* Testimonials Grid */
.testimonials-container {
  max-width: 1100px;
  margin: 0 auto 2rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Testimonial Card */
.testimonial-card {
  position: relative;
  background: linear-gradient(145deg, rgba(30, 30, 30, 0.8), rgba(20, 20, 20, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.testimonial-card:hover {
  transform: translateY(-5px);
  border-color: rgba(220, 53, 69, 0.3);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(220, 53, 69, 0.1);
}

.testimonial-hover-line {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--accent-primary, #dc3545), transparent);
  transition: width 0.3s ease;
}

.testimonial-card:hover .testimonial-hover-line {
  width: 80%;
}

/* Quote Icon */
.testimonial-quote {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2.5rem;
  color: rgba(220, 53, 69, 0.15);
  line-height: 1;
  transition: color 0.3s ease;
}

.testimonial-card:hover .testimonial-quote {
  color: rgba(220, 53, 69, 0.25);
}

/* Rating */
.testimonial-rating {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.testimonial-rating i {
  font-size: 0.875rem;
  color: #ffc107;
  filter: drop-shadow(0 0 2px rgba(255, 193, 7, 0.3));
}

/* Text */
.testimonial-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary, #e0e0e0);
  margin-bottom: 1.25rem;
  font-style: italic;
}

/* Author */
.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.testimonial-author__avatar {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(220, 53, 69, 0.2), rgba(220, 53, 69, 0.1));
  border: 1px solid rgba(220, 53, 69, 0.2);
  border-radius: 50%;
  color: var(--accent-primary, #dc3545);
  font-size: 1.25rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.testimonial-card:hover .testimonial-author__avatar {
  background: linear-gradient(135deg, rgba(220, 53, 69, 0.3), rgba(220, 53, 69, 0.15));
  border-color: rgba(220, 53, 69, 0.4);
}

.testimonial-author__info {
  flex: 1;
  min-width: 0;
}

.testimonial-author__name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary, #fff);
  margin-bottom: 0.2rem;
}

.testimonial-author__case {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--accent-primary, #dc3545);
}

.testimonial-author__case i {
  font-size: 0.7rem;
}

/* No Testimonials */
.no-testimonials {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(145deg, rgba(30, 30, 30, 0.5), rgba(20, 20, 20, 0.6));
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
}

.no-testimonials__icon {
  font-size: 3rem;
  color: var(--accent-primary, #dc3545);
  opacity: 0.5;
  margin-bottom: 1rem;
}

.no-testimonials p {
  font-size: 1rem;
  color: var(--text-muted, #a0a0a0);
}

/* CTA */
.testimonials-cta {
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

.testimonials-cta__content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonials-cta__icon {
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

.testimonials-cta__text {
  text-align: left;
}

.testimonials-cta__label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary, #fff);
  margin-bottom: 0.125rem;
}

.testimonials-cta__desc {
  font-size: 0.875rem;
  color: var(--text-muted, #a0a0a0);
}

/* Responsive */
@media (max-width: 640px) {
  .testimonials-header {
    margin-bottom: 2rem;
  }
  
  .testimonials-grid {
    gap: 1rem;
  }
  
  .testimonial-card {
    padding: 1.25rem;
  }
  
  .testimonial-quote {
    font-size: 2rem;
  }
  
  .testimonial-text {
    font-size: 0.9rem;
  }
  
  .testimonials-cta {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
  }
  
  .testimonials-cta__content {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .testimonials-cta__text {
    text-align: center;
  }
}
</style>
