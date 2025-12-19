// Validadores para formularios

// Validar email
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// Validar teléfono (formato mexicano flexible)
export const validatePhone = (phone) => {
  // Remover espacios, guiones y paréntesis
  const cleaned = phone.replace(/[\s\-()]/g, '')
  
  // Debe tener entre 10 y 13 dígitos (considerando código de país)
  const regex = /^\d{10,13}$/
  return regex.test(cleaned)
}

// Validar nombre completo
export const validateFullName = (name) => {
  // Al menos 3 caracteres y solo letras y espacios
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/
  return regex.test(name.trim())
}

// Validar longitud mínima
export const validateMinLength = (text, minLength = 1) => {
  return text.trim().length >= minLength
}

// Validar longitud máxima
export const validateMaxLength = (text, maxLength) => {
  return text.trim().length <= maxLength
}

// Validar que el campo no esté vacío
export const validateRequired = (value) => {
  if (typeof value === 'string') {
    return value.trim().length > 0
  }
  if (typeof value === 'boolean') {
    return value === true
  }
  return value != null && value !== ''
}

// Validar URL
export const validateUrl = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Validar mensaje (sin caracteres especiales peligrosos)
export const validateMessage = (message) => {
  // Rechazar si contiene scripts o HTML
  const dangerousPatterns = /<script|<iframe|javascript:|onerror=/i
  return !dangerousPatterns.test(message) && message.trim().length >= 10
}

// Limpiar input (sanitizar)
export const sanitizeInput = (input) => {
  return input
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

// Formatear teléfono
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/[\s\-()]/g, '')
  
  // Formato: XX-XXXX-XXXX
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 2)}-${cleaned.slice(2, 6)}-${cleaned.slice(6)}`
  }
  
  return phone
}

// Validar formulario completo
export const validateContactForm = (formData) => {
  const errors = {}
  
  // Nombre
  if (!validateRequired(formData.fullName)) {
    errors.fullName = 'El nombre es requerido'
  } else if (!validateFullName(formData.fullName)) {
    errors.fullName = 'Ingrese un nombre válido (solo letras y espacios)'
  }
  
  // Email
  if (!validateRequired(formData.email)) {
    errors.email = 'El correo electrónico es requerido'
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Ingrese un correo electrónico válido'
  }
  
  // Teléfono
  if (!validateRequired(formData.phone)) {
    errors.phone = 'El teléfono es requerido'
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Ingrese un teléfono válido (10 dígitos mínimo)'
  }
  
  // Mensaje
  if (!validateRequired(formData.message)) {
    errors.message = 'El mensaje es requerido'
  } else if (!validateMessage(formData.message)) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres'
  }
  
  // Privacidad
  if (!formData.acceptPrivacy) {
    errors.acceptPrivacy = 'Debe aceptar la política de privacidad'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export default {
  validateEmail,
  validatePhone,
  validateFullName,
  validateMinLength,
  validateMaxLength,
  validateRequired,
  validateUrl,
  validateMessage,
  sanitizeInput,
  formatPhone,
  validateContactForm
}
