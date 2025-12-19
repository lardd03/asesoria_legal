<template>
  <section class="section section-contact section-accent">
    <div class="section-content">
      <SectionTitle
        title="Contáctanos"
        subtitle="Estamos listos para ayudarte. Solicita una consulta gratuita hoy mismo"
      />
      
      <div class="contact-wrapper">
        <!-- Información de contacto -->
        <div class="contact-info">
          <div class="info-item">
            <i class="bi bi-geo-alt-fill"></i>
            <div>
              <h4>Cobertura</h4>
              <p>{{ contact.coverage }}</p>
            </div>
          </div>
          
          <div class="info-item">
            <i class="bi bi-envelope-fill"></i>
            <div>
              <h4>Correos</h4>
              <a v-for="email in contact.emails" :key="email" :href="`mailto:${email}`">
                {{ email }}
              </a>
            </div>
          </div>
          
          <div class="info-item">
            <i class="bi bi-telephone-fill"></i>
            <div>
              <h4>Teléfonos</h4>
              <a v-for="phone in contact.phones.slice(0, 3)" :key="phone" :href="`tel:${phone}`">
                {{ phone }}
              </a>
            </div>
          </div>
          
          <div class="info-item">
            <i class="bi bi-clock-fill"></i>
            <div>
              <h4>Horario</h4>
              <p v-html="contact.schedule || 'Lun - Vie: 9:00 AM - 7:00 PM'"></p>
            </div>
          </div>
        </div>
        
        <!-- Formulario de contacto -->
        <div class="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useContentStore } from '../../stores/content'
import SectionTitle from '../ui/SectionTitle.vue'
import ContactForm from '../ui/ContactForm.vue'

const contentStore = useContentStore()

const contact = computed(() => contentStore.contact)
</script>

<style scoped>
.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 992px) {
  .contact-wrapper {
    grid-template-columns: 1fr 1.5fr;
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  
  i {
    font-size: 2rem;
    color: var(--accent-primary, #dc3545);
    margin-top: 0.25rem;
  }
  
  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }
  
  p, a {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
    display: block;
    margin-bottom: 0.25rem;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: var(--accent-primary, #dc3545);
  }
}

.contact-form-container {
  background-color: rgba(26, 26, 26, 0.5);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(220, 53, 69, 0.2);
}

@media (min-width: 768px) {
  .contact-form-container {
    padding: 3rem;
  }
}
</style>
