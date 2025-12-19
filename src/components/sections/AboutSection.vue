<template>
  <section class="section section-about">
    <!-- Background Elements -->
    <div class="bg-pattern"></div>
    <div class="bg-glow"></div>

    <div class="section-content">
      <SectionTitle
        title="Acerca de "
        accent="Nosotros"
        subtitle="Conoce nuestra historia, misión y compromiso inquebrantable con la justicia."
        class="about-title"
      />
      
      <div class="about-container">
        <!-- Mission & Vision Grid -->
        <div class="mv-grid">
          <div class="mv-card mission-card">
            <div class="card-decoration"></div>
            <div class="card-icon">
              <img src="/icons/mazo.png" alt="Misión" class="card-icon-img" />
            </div>
            <div class="card-content">
              <h3>Nuestra Misión</h3>
              <p>{{ firm.mission }}</p>
            </div>
          </div>
          
          <div class="mv-card vision-card">
            <div class="card-decoration"></div>
            <div class="card-icon">
              <img src="/icons/mazo.png" alt="Visión" class="card-icon-img" />
            </div>
            <div class="card-content">
              <h3>Nuestra Visión</h3>
              <p>{{ firm.vision }}</p>
            </div>
          </div>
        </div>
        
        <!-- Values Section -->
        <div class="values-wrapper">
          <div class="values-header">
            <div class="line"></div>
            <h3>Nuestros Valores</h3>
            <div class="line"></div>
          </div>
          
          <div class="values-grid">
            <div v-for="(value, index) in firm.values" :key="index" class="value-card" :style="{ '--delay': `${index * 0.1}s` }">
              <div class="value-icon-box">
                <i class="bi bi-shield-check"></i>
              </div>
              <span class="value-text">{{ value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useContentStore } from '../../stores/content'
import SectionTitle from '../ui/SectionTitle.vue'

const contentStore = useContentStore()

const firm = computed(() => contentStore.firm)
</script>

<style scoped lang="scss">
.section-about {
  position: relative;
  background-color: var(--bg-secondary, #111111);
  overflow-x: hidden;
  overflow-y: auto; // Enable vertical scrolling
  padding: 3rem 0; // Reduced padding for mobile
  height: 100vh; // Force height to viewport to enable internal scrolling

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
}

// Background Elements
.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.3;
  z-index: 0;
}

.bg-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; // Responsive width
  max-width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(220, 53, 69, 0.05) 0%, transparent 70%);
  z-index: 0;
  pointer-events: none;
}

.section-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.about-container {
  margin-top: 2rem; // Reduced margin for mobile

  @media (min-width: 768px) {
    margin-top: 4rem;
  }
}

// Mission & Vision Cards
.mv-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem; // Reduced gap
  margin-bottom: 3rem; // Reduced margin

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-bottom: 5rem;
  }
}

.mv-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem 1.5rem; // Reduced padding
  text-align: center;
  transition: all 0.4s ease;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(220, 53, 69, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    
    .card-icon {
      transform: scale(1.1) rotate(5deg);
      color: #fff;
      background: var(--accent-primary, #dc3545);
      border-color: var(--accent-primary, #dc3545);
    }
    
    .card-decoration {
      opacity: 1;
    }
  }
}

.card-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--accent-primary, #dc3545), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(220, 53, 69, 0.1);
  border: 1px solid rgba(220, 53, 69, 0.2);
  color: var(--accent-primary, #dc3545);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
}

.card-icon-img {
  width: 45px;
  height: 45px;
  object-fit: contain;
  filter: invert(27%) sepia(89%) saturate(2074%) hue-rotate(336deg) brightness(87%) contrast(95%);
  transition: all 0.4s ease;
}

.mv-card:hover .card-icon-img {
  filter: brightness(0) invert(1);
  transform: scale(1.1);
}

.card-content {
  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.75rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-secondary, #e0e0e0);
  }
}

// Values Section
.values-wrapper {
  text-align: center;
}

.values-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
  }
  
  .line {
    height: 1px;
    width: 60px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    
    @media (min-width: 768px) {
      width: 100px;
    }
  }
}

.values-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.value-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease backwards;
  animation-delay: var(--delay);
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(220, 53, 69, 0.3);
    transform: translateY(-3px);
    
    .value-icon-box {
      color: var(--accent-primary, #dc3545);
    }
  }
}

.value-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--text-muted, #888);
  transition: color 0.3s ease;
}

.value-text {
  font-size: 1.1rem;
  font-weight: 500;
  color: #e0e0e0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
