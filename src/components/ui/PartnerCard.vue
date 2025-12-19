<template>
  <div class="partner-card card">
    <img 
      :src="image" 
      :alt="name" 
      class="partner-image"
      @error="handleImageError"
    />
    <h3 class="partner-name">{{ name }}</h3>
    <p class="partner-title">{{ title }}</p>
    
    <div v-if="specialties && specialties.length" class="partner-specialties">
      <span 
        v-for="(specialty, index) in specialties" 
        :key="index"
        class="specialty-badge"
      >
        {{ specialty }}
      </span>
    </div>

    <p v-if="description" class="partner-description">{{ description }}</p>

    <div class="partner-contact">
      <a v-if="email" :href="`mailto:${email}`">
        <i class="bi bi-envelope"></i>
        {{ email }}
      </a>
      <a v-if="phone" :href="`tel:${phone.replace(/[\s\-]/g, '')}`">
        <i class="bi bi-telephone"></i>
        {{ phone }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: '/images/partners/default-avatar.jpg'
  },
  specialties: {
    type: Array,
    default: () => []
  },
  description: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  }
})

const handleImageError = (event) => {
  // Imagen por defecto si falla la carga - usando data URI
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzFhMWExYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDgiIGZpbGw9IiNkYzM1NDUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TSjwvdGV4dD48L3N2Zz4='
}
</script>

<style scoped>
.partner-description {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}
</style>
