<template>
  <component
    :is="tag"
    class="cta-button btn"
    :class="buttonClasses"
    :href="href"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <i v-if="icon && !loading" :class="`bi bi-${icon}`"></i>
    <span v-if="!loading">{{ text }}</span>
    <span v-else class="loading-spinner">
      <i class="bi bi-arrow-repeat spin"></i>
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'primary', // primary, secondary, outline, ghost
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  href: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  block: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const tag = computed(() => props.href ? 'a' : 'button')

const buttonClasses = computed(() => [
  `btn-${props.variant}`,
  `btn-${props.size}`,
  {
    'btn-block': props.block,
    'btn-icon': props.icon,
    'btn-loading': props.loading
  }
])

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.loading-spinner .spin {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
