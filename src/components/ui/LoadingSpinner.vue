<template>
  <div class="loading-spinner" :class="`spinner-${size}`">
    <div class="spinner-circle"></div>
    <p v-if="text" class="spinner-text">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: 'md', // sm, md, lg
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  text: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.spinner-circle {
  border: 3px solid rgba(220, 53, 69, 0.2);
  border-top-color: #dc3545;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.spinner-sm .spinner-circle {
  width: 24px;
  height: 24px;
  border-width: 2px;
}

.spinner-md .spinner-circle {
  width: 40px;
  height: 40px;
  border-width: 3px;
}

.spinner-lg .spinner-circle {
  width: 60px;
  height: 60px;
  border-width: 4px;
}

.spinner-text {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin: 0;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
