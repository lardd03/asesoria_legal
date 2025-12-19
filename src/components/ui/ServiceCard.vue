<template>
  <div class="service-card card">
    <div class="icon">
      <i :class="`bi ${icon}`"></i>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
