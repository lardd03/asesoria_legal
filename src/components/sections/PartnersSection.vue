<template>
  <section class="section section-partners section-light">
    <div class="section-content">
      <SectionTitle
        title="Nuestros "
        accent="Socios"
        subtitle="Profesionales del derecho comprometidos con tu defensa"
      />
      
      <div class="partners-grid">
        <PartnerCard
          v-for="partner in partners"
          :key="partner.id"
          :name="partner.name"
          :title="partner.title"
          :image="partner.image"
          :specialties="partner.specialties"
          :description="partner.description"
          :email="partner.email"
          :phone="partner.phone"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useContentStore } from '../../stores/content'
import SectionTitle from '../ui/SectionTitle.vue'
import PartnerCard from '../ui/PartnerCard.vue'

const contentStore = useContentStore()

const partners = computed(() => contentStore.partners)
</script>

<style scoped>
.partners-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

@media (min-width: 992px) {
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
