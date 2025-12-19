<template>
  <div class="social-links" :class="`align-${align}`">
    <a 
      v-if="socialMedia.facebook" 
      :href="socialMedia.facebook" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Facebook"
      class="social-link"
    >
      <i class="bi bi-facebook"></i>
    </a>
    
    <a 
      v-if="socialMedia.linkedin" 
      :href="socialMedia.linkedin" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      class="social-link"
    >
      <i class="bi bi-linkedin"></i>
    </a>
    
    <a 
      v-if="socialMedia.instagram" 
      :href="socialMedia.instagram" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Instagram"
      class="social-link"
    >
      <i class="bi bi-instagram"></i>
    </a>
    
    <a 
      v-if="socialMedia.whatsapp" 
      :href="`https://wa.me/${socialMedia.whatsapp}`" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      class="social-link whatsapp"
    >
      <i class="bi bi-whatsapp"></i>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useContentStore } from '../../stores/content'

defineProps({
  align: {
    type: String,
    default: 'left', // left, center, right
    validator: (value) => ['left', 'center', 'right'].includes(value)
  }
})

const contentStore = useContentStore()
const socialMedia = computed(() => contentStore.socialMedia)
</script>

<style scoped>
.social-links {
  display: flex;
  gap: 1rem;
}

.align-left {
  justify-content: flex-start;
}

.align-center {
  justify-content: center;
}

.align-right {
  justify-content: flex-end;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  
  i {
    font-size: 1.25rem;
  }
  
  &:hover {
    background-color: var(--accent-primary, #dc3545);
    color: var(--text-primary);
    transform: translateY(-3px);
  }
  
  &.whatsapp:hover {
    background-color: #25D366;
  }
}
</style>
