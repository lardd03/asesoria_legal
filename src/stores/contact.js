import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useContactStore = defineStore('contact', () => {
  // State
  const formData = ref({
    fullName: '',
    email: '',
    phone: '',
    areaOfInterest: '',
    message: '',
    acceptPrivacy: false
  })

  const errors = ref({})
  const isSubmitting = ref(false)
  const submitSuccess = ref(false)
  const submitError = ref(null)

  // Getters
  const isFormValid = computed(() => {
    return formData.value.fullName.trim() !== '' &&
           formData.value.email.trim() !== '' &&
           formData.value.phone.trim() !== '' &&
           formData.value.message.trim() !== '' &&
           formData.value.acceptPrivacy &&
           Object.keys(errors.value).length === 0
  })

  const hasErrors = computed(() => Object.keys(errors.value).length > 0)
  
  const canSubmit = computed(() => isFormValid.value && !isSubmitting.value)

  // Actions
  function updateField(field, value) {
    formData.value[field] = value
    // Limpiar error del campo al escribir
    if (errors.value[field]) {
      delete errors.value[field]
    }
  }

  function validateField(field) {
    const value = formData.value[field]
    
    switch(field) {
      case 'fullName':
        if (!value || value.trim().length < 3) {
          errors.value[field] = 'El nombre debe tener al menos 3 caracteres'
        } else {
          delete errors.value[field]
        }
        break
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!value || !emailRegex.test(value)) {
          errors.value[field] = 'Ingrese un correo electrónico válido'
        } else {
          delete errors.value[field]
        }
        break
      
      case 'phone':
        const phoneRegex = /^[\d\s\-()]+$/
        if (!value || value.length < 10 || !phoneRegex.test(value)) {
          errors.value[field] = 'Ingrese un teléfono válido (mínimo 10 dígitos)'
        } else {
          delete errors.value[field]
        }
        break
      
      case 'message':
        if (!value || value.trim().length < 10) {
          errors.value[field] = 'El mensaje debe tener al menos 10 caracteres'
        } else {
          delete errors.value[field]
        }
        break
      
      case 'acceptPrivacy':
        if (!value) {
          errors.value[field] = 'Debe aceptar la política de privacidad'
        } else {
          delete errors.value[field]
        }
        break
    }
  }

  function validateForm() {
    errors.value = {}
    
    Object.keys(formData.value).forEach(field => {
      validateField(field)
    })
    
    return Object.keys(errors.value).length === 0
  }

  async function submitForm() {
    if (!validateForm() || !canSubmit.value) {
      return false
    }

    isSubmitting.value = true
    submitError.value = null
    
    try {
      // Simular envío - aquí iría la llamada a API real
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Aquí iría la llamada real:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData.value)
      // })
      
      submitSuccess.value = true
      
      // Enviar email o notificación
      console.log('Formulario enviado:', formData.value)
      
      // Resetear después de 3 segundos
      setTimeout(() => {
        resetForm()
      }, 3000)
      
      return true
    } catch (error) {
      submitError.value = 'Hubo un error al enviar el formulario. Por favor, intente nuevamente.'
      console.error('Error al enviar formulario:', error)
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  function resetForm() {
    formData.value = {
      fullName: '',
      email: '',
      phone: '',
      areaOfInterest: '',
      message: '',
      acceptPrivacy: false
    }
    errors.value = {}
    submitSuccess.value = false
    submitError.value = null
  }

  function clearErrors() {
    errors.value = {}
  }

  function setSubmitting(status) {
    isSubmitting.value = status
  }

  return {
    // State
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    submitError,
    // Getters
    isFormValid,
    hasErrors,
    canSubmit,
    // Actions
    updateField,
    validateField,
    validateForm,
    submitForm,
    resetForm,
    clearErrors,
    setSubmitting
  }
})
