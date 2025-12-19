<script setup>
import { RouterView } from 'vue-router'
import { useContentStore } from './stores/content'

// Cargar contenido al iniciar la app
const contentStore = useContentStore()
contentStore.loadContent()
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
/* Los estilos globales se cargan desde main.scss */
#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
