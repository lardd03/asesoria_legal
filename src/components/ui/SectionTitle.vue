<template>
  <div class="section-title" :class="`text-${align}`">
    <h2>
      <slot name="title">
        {{ title }}
        <span v-if="accent" class="accent">{{ accent }}</span>
      </slot>
    </h2>
    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
    <div v-if="showDivider" class="divider"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  accent: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  align: {
    type: String,
    default: 'center', // left, center, right
    validator: (value) => ['left', 'center', 'right'].includes(value)
  },
  showDivider: {
    type: Boolean,
    default: true
  }
})
</script>
