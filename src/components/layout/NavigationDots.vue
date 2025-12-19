<template>
<!--   <div class="navigation-dots">
    <button
      v-for="(label, index) in labels"
      :key="index"
      class="dot"
      :class="{ active: currentSection === index }"
      :data-label="label"
      @click="goToSection(index)"
      :aria-label="`Ir a ${label}`"
    ></button>
  </div> -->

  <!-- Progress bar -->
  <div class="navigation-progress">
    <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
  </div>

  <!-- Flechas de navegación (desktop) -->
  <div class="navigation-arrows">
    <button
      class="arrow arrow-left"
      :class="{ disabled: !canGoPrev }"
      @click="prevSection"
      :disabled="!canGoPrev"
      aria-label="Sección anterior"
    >
      <img src="/icons/proximo.png" alt="Anterior" class="arrow-icon arrow-icon--prev" />
    </button>
    <button
      class="arrow arrow-right"
      :class="{ disabled: !canGoNext }"
      @click="nextSection"
      :disabled="!canGoNext"
      aria-label="Siguiente sección"
    >
      <img src="/icons/proximo.png" alt="Siguiente" class="arrow-icon arrow-icon--next" />
    </button>
  </div>

  <!-- Hint de navegación -->
  <div v-if="showHint" class="navigation-hint" :class="{ hidden: !showHint }">
    <p class="hint-text">
      <span v-if="isMobile">Desliza</span>
      <span v-else>Usa las flechas</span>
      para navegar
    </p>
    <i class="bi bi-arrow-left-right hint-icon"></i>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUIStore } from '../../stores/ui'
import { SECTION_LABELS } from '../../utils/constants'

const uiStore = useUIStore()

const labels = SECTION_LABELS
const currentSection = computed(() => uiStore.currentSection)
const progress = computed(() => uiStore.sectionProgress)
const canGoPrev = computed(() => uiStore.canGoPrev)
const canGoNext = computed(() => uiStore.canGoNext)
const showHint = computed(() => uiStore.showScrollHint)
const isMobile = computed(() => uiStore.isMobile)

const goToSection = (index) => {
  uiStore.goToSection(index)
}

const prevSection = () => {
  if (canGoPrev.value) {
    uiStore.prevSection()
  }
}

const nextSection = () => {
  if (canGoNext.value) {
    uiStore.nextSection()
  }
}
</script>
