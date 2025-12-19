// Constantes del proyecto

// Nombres de secciones
export const SECTIONS = {
  HERO: 0,
  ABOUT: 1,
  PARTNERS: 2,
  SERVICES: 3,
  COVERAGE: 4,
  TESTIMONIALS: 5,
  CONTACT: 6
}

// Labels de secciones
export const SECTION_LABELS = [
  'Inicio',
  'Nosotros',
  'Socios',
  'Servicios',
  'Cobertura',
  'Testimonios',
  'Contacto'
]

// Información de contacto
export const CONTACT_INFO = {
  emails: [
    'solucioncsjcs@hotmail.com',
    'mjsolucionesjcs@hotmail.com'
  ],
  phones: [
    '55-6192-9409',
    '55-7429-5791',
    '55-4861-2916',
    '55-5958-7958'
  ],
  officePhone: '55-5958-7958',
  whatsapp: '5561929409',
  coverage: 'Toda la República Mexicana'
}

// Áreas de práctica
export const PRACTICE_AREAS = [
  'Civil',
  'Penal',
  'Laboral',
  'Administrativo',
  'Familiar',
  'Aduanal',
  'Amparos',
  'Asesoría Fiscal'
]

// Redes sociales (placeholders)
export const SOCIAL_MEDIA = {
  facebook: '',
  linkedin: '',
  instagram: '',
  twitter: ''
}

// Tiempos de transición
export const TRANSITION_DURATION = 600 // ms
export const TRANSITION_FAST = 300 // ms
export const TRANSITION_SLOW = 800 // ms

// Breakpoints
export const BREAKPOINTS = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

// Umbrales de swipe
export const SWIPE_THRESHOLD = 50 // px
export const SWIPE_VELOCITY_THRESHOLD = 0.3

// Mensajes del sistema
export const MESSAGES = {
  form: {
    success: '¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.',
    error: 'Hubo un error al enviar el mensaje. Por favor, intente nuevamente.',
    required: 'Este campo es requerido',
    invalidEmail: 'Ingrese un correo electrónico válido',
    invalidPhone: 'Ingrese un número de teléfono válido',
    minLength: (min) => `Debe tener al menos ${min} caracteres`
  },
  navigation: {
    hint: 'Desliza o usa las flechas para navegar',
    loading: 'Cargando...'
  }
}

// Meta información
export const META_INFO = {
  title: 'SOLUCIONES JURÍDICAS SJ - Bufete de Abogados en México',
  description: 'Bufete jurídico especializado en Derecho Civil, Penal, Laboral, Familiar y más. Cobertura en toda la República Mexicana.',
  keywords: 'abogados, bufete jurídico, derecho civil, derecho penal, derecho laboral, México, asesoría legal',
  author: 'SOLUCIONES JURÍDICAS SJ'
}
