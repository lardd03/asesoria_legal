<template>
  <div class="icon-box" :class="[`size-${size}`, variant && `variant-${variant}`]">
    <i :class="`bi ${icon}`"></i>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg, xl
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  variant: {
    type: String,
    default: null, // primary, secondary, outline
    validator: (value) => !value || ['primary', 'secondary', 'outline'].includes(value)
  }
})
</script>

<style scoped>
.icon-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.size-sm {
  width: 32px;
  height: 32px;
  font-size: 1rem;
}

.size-md {
  width: 48px;
  height: 48px;
  font-size: 1.5rem;
}

.size-lg {
  width: 64px;
  height: 64px;
  font-size: 2rem;
}

.size-xl {
  width: 80px;
  height: 80px;
  font-size: 2.5rem;
}

.variant-primary {
  background-color: rgba(220, 53, 69, 0.1);
  color: var(--accent-primary, #dc3545);
}

.variant-secondary {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
}

.variant-outline {
  border: 2px solid var(--accent-primary, #dc3545);
  color: var(--accent-primary, #dc3545);
}

.icon-box:hover {
  transform: scale(1.1);
}
</style>
