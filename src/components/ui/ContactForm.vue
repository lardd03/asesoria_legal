<template>
  <div class="contact-form-wrapper">
    <!-- Mensaje de éxito -->
    <div v-if="submitSuccess" class="form-success">
      <i class="bi bi-check-circle"></i>
      <p>¡Mensaje enviado exitosamente!</p>
      <p class="text-sm">Nos pondremos en contacto pronto.</p>
    </div>

    <!-- Mensaje de error general -->
    <div v-if="submitError" class="form-error-message">
      <i class="bi bi-exclamation-triangle"></i>
      <p>{{ submitError }}</p>
    </div>

    <!-- Formulario -->
    <form v-show="!submitSuccess" @submit.prevent="handleSubmit" class="form">
      <!-- Nombre completo -->
      <div class="form-group">
        <label for="fullName" class="form-label">Nombre Completo *</label>
        <input
          id="fullName"
          v-model="formData.fullName"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.fullName }"
          placeholder="Ej: Juan Pérez García"
          @blur="validateField('fullName')"
        />
        <span v-if="errors.fullName" class="form-error">{{ errors.fullName }}</span>
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email" class="form-label">Correo Electrónico *</label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
          placeholder="ejemplo@correo.com"
          @blur="validateField('email')"
        />
        <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
      </div>

      <!-- Teléfono -->
      <div class="form-group">
        <label for="phone" class="form-label">Teléfono *</label>
        <input
          id="phone"
          v-model="formData.phone"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors.phone }"
          placeholder="55-1234-5678"
          @blur="validateField('phone')"
        />
        <span v-if="errors.phone" class="form-error">{{ errors.phone }}</span>
      </div>

      <!-- Área de interés -->
      <div class="form-group">
        <label for="areaOfInterest" class="form-label">Área de Interés</label>
        <select
          id="areaOfInterest"
          v-model="formData.areaOfInterest"
          class="form-control"
        >
          <option value="">Seleccione un área</option>
          <option value="Civil">Civil</option>
          <option value="Penal">Penal</option>
          <option value="Laboral">Laboral</option>
          <option value="Administrativo">Administrativo</option>
          <option value="Familiar">Familiar</option>
          <option value="Aduanal">Aduanal</option>
          <option value="Amparos">Amparos</option>
          <option value="Asesoría Fiscal">Asesoría Fiscal</option>
        </select>
      </div>

      <!-- Mensaje -->
      <div class="form-group">
        <label for="message" class="form-label">Mensaje *</label>
        <textarea
          id="message"
          v-model="formData.message"
          class="form-control"
          :class="{ 'is-invalid': errors.message }"
          rows="5"
          placeholder="Cuéntenos sobre su caso..."
          @blur="validateField('message')"
        ></textarea>
        <span v-if="errors.message" class="form-error">{{ errors.message }}</span>
      </div>

      <!-- Checkbox de privacidad -->
      <div class="form-check">
        <input
          id="acceptPrivacy"
          v-model="formData.acceptPrivacy"
          type="checkbox"
          @change="validateField('acceptPrivacy')"
        />
        <label for="acceptPrivacy">
          Acepto el <a href="#" @click.prevent>aviso de privacidad</a> *
        </label>
      </div>
      <span v-if="errors.acceptPrivacy" class="form-error">{{ errors.acceptPrivacy }}</span>

      <!-- Botón de envío -->
      <CTAButton
        text="Enviar Consulta"
        variant="primary"
        size="lg"
        icon="send"
        :loading="isSubmitting"
        :disabled="!canSubmit"
        block
        @click="handleSubmit"
      />
    </form>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useContactStore } from '../../stores/contact'
import CTAButton from './CTAButton.vue'

const contactStore = useContactStore()

const formData = computed(() => contactStore.formData)
const errors = computed(() => contactStore.errors)
const isSubmitting = computed(() => contactStore.isSubmitting)
const submitSuccess = computed(() => contactStore.submitSuccess)
const submitError = computed(() => contactStore.submitError)
const canSubmit = computed(() => contactStore.canSubmit)

const validateField = (field) => {
  contactStore.validateField(field)
}

const handleSubmit = async () => {
  await contactStore.submitForm()
}
</script>

<style scoped>
.contact-form-wrapper {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
