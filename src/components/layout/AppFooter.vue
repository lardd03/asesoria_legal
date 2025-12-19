<template>
  <footer class="app-footer">
    <div class="footer-container">
      <!-- Contenido principal del footer -->
      <div class="footer-content">
        <!-- Información de la marca -->
        <div class="footer-section footer-brand">
          <div class="brand-logo">
            <i class="bi bi-shield-check"></i>
            SOLUCIÓN <span>JURÍDICA</span>
          </div>
          <p class="brand-description">
            Bufete de abogados especializado en brindar soluciones legales 
            integrales con profesionalismo y dedicación en toda la República Mexicana.
          </p>
          <div class="footer-social">
            <div class="social-links">
              <a v-if="socialMedia.facebook" :href="socialMedia.facebook" target="_blank" rel="noopener" aria-label="Facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a v-if="socialMedia.linkedin" :href="socialMedia.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
                <i class="bi bi-linkedin"></i>
              </a>
              <a v-if="socialMedia.instagram" :href="socialMedia.instagram" target="_blank" rel="noopener" aria-label="Instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a v-if="socialMedia.whatsapp" :href="`https://wa.me/${socialMedia.whatsapp}`" target="_blank" rel="noopener" aria-label="WhatsApp">
                <i class="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Servicios -->
        <div class="footer-section footer-services">
          <h3>Especialidades Jurídicas</h3>
          <ul>
            <li v-for="service in services.slice(0, 6)" :key="service.id">
              <button @click="goToServices" class="footer-link">{{ service.name }}</button>
            </li>
          </ul>
        </div>

        <!-- Enlaces rápidos -->
        <div class="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><button @click="goToSection(SECTIONS.ABOUT)" class="footer-link">Nosotros</button></li>
            <li><button @click="goToSection(SECTIONS.PARTNERS)" class="footer-link">Nuestros Socios</button></li>
            <li><button @click="goToSection(SECTIONS.SERVICES)" class="footer-link">Servicios</button></li>
            <li><button @click="goToSection(SECTIONS.TESTIMONIALS)" class="footer-link">Testimonios</button></li>
            <li><button @click="goToSection(SECTIONS.CONTACT)" class="footer-link">Contacto</button></li>
          </ul>
        </div>

        <!-- Contacto -->
        <div class="footer-section footer-contact">
          <h3>Contacto</h3>
          
          <div class="contact-item">
            <i class="bi bi-geo-alt-fill"></i>
            <div class="contact-info">
              <p>{{ contact.coverage }}</p>
            </div>
          </div>

          <div class="contact-item">
            <i class="bi bi-envelope-fill"></i>
            <div class="contact-info">
              <a :href="`mailto:${contact.emails[0]}`">{{ contact.emails[0] }}</a>
            </div>
          </div>

          <div class="contact-item">
            <i class="bi bi-telephone-fill"></i>
            <div class="contact-info">
              <a :href="`tel:${contact.officePhone}`">{{ contact.officePhone }}</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Parte inferior del footer -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} SOLUCIONES JURÍDICAS SJ. Todos los derechos reservados.
        </p>
        <div class="footer-links">
          <a href="#" @click.prevent>Aviso de Privacidad</a>
          <a href="#" @click.prevent>Términos y Condiciones</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useContentStore } from '../../stores/content'
import { useUIStore } from '../../stores/ui'
import { SECTIONS } from '../../utils/constants'

const contentStore = useContentStore()
const uiStore = useUIStore()

const services = computed(() => contentStore.services)
const contact = computed(() => contentStore.contact)
const socialMedia = computed(() => contentStore.socialMedia)
const currentYear = new Date().getFullYear()

const goToSection = (sectionIndex) => {
  uiStore.goToSection(sectionIndex)
}

const goToServices = () => {
  uiStore.goToSection(SECTIONS.SERVICES)
}
</script>

<style scoped lang="scss">
@use '../../styles/variables/colors' as *;
@use '../../styles/variables/spacing' as *;
@use '../../styles/variables/breakpoints' as *;
@use '../../styles/mixins/responsive' as *;

.app-footer {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), $color-dark);
  border-top: 1px solid rgba($color-primary, 0.2);
  padding: $spacing-xl 0 $spacing-md;
  
  .footer-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 $spacing-md;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-lg;
    margin-bottom: $spacing-xl;
    
    @include respond-to('md') {
      grid-template-columns: 2fr 1fr 1fr 1.2fr;
    }
  }
  
  .footer-section {
    h3 {
      color: $color-primary;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: $spacing-md;
      letter-spacing: 0.5px;
    }
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        margin-bottom: $spacing-sm;
        
        button.footer-link,
        a {
          background: none;
          border: none;
          color: $color-text-secondary;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          padding: 0;
          font-size: 0.95rem;
          font-family: inherit;
          text-align: left;
          display: inline-block;
          
          &:hover {
            color: $color-primary;
            transform: translateX(5px);
          }
        }
      }
    }
  }
  
  .footer-brand {
    .brand-logo {
      display: flex;
      align-items: center;
      gap: $spacing-xs;
      font-size: 1.5rem;
      font-weight: 700;
      color: $color-text-primary;
      margin-bottom: $spacing-md;
      
      i {
        color: $color-primary;
        font-size: 2rem;
      }
      
      span {
        color: $color-primary;
      }
    }
    
    .brand-description {
      color: $color-text-secondary;
      line-height: 1.6;
      margin-bottom: $spacing-md;
      font-size: 0.95rem;
    }
    
    .social-links {
      display: flex;
      gap: $spacing-sm;
      
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba($color-primary, 0.1);
        color: $color-primary;
        transition: all 0.3s ease;
        
        &:hover {
          background: $color-primary;
          color: white;
          transform: translateY(-3px);
        }
        
        i {
          font-size: 1.2rem;
        }
      }
    }
  }
  
  .footer-contact {
    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: $spacing-sm;
      margin-bottom: $spacing-md;
      
      i {
        color: $color-primary;
        font-size: 1.1rem;
        margin-top: 2px;
      }
      
      .contact-info {
        p, a {
          color: $color-text-secondary;
          margin: 0;
          font-size: 0.95rem;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        a:hover {
          color: $color-primary;
        }
      }
    }
  }
  
  .footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-md;
    padding-top: $spacing-lg;
    border-top: 1px solid rgba($color-border, 0.1);
    
    @include respond-to('md') {
      flex-direction: row;
      justify-content: space-between;
    }
    
    .copyright {
      color: $color-text-secondary;
      font-size: 0.9rem;
      margin: 0;
    }
    
    .footer-links {
      display: flex;
      gap: $spacing-md;
      
      a {
        color: $color-text-secondary;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s;
        
        &:hover {
          color: $color-primary;
        }
      }
    }
  }
}
</style>