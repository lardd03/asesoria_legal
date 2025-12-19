import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useContentStore = defineStore('content', () => {
  // State
  const firm = ref({
    name: 'SOLUCIONES JURIDICAS S&J',
    slogan: 'Tu Defensa Legal Profesional',
    mission: 'Brindar servicios legales de excelencia con un enfoque personalizado, protegiendo los derechos e intereses de nuestros clientes con profesionalismo y dedicación.',
    vision: 'Ser el bufete de referencia en México, reconocido por nuestra integridad, resultados efectivos y compromiso con la justicia.',
    values: ['Profesionalismo', 'Confianza', 'Resultados', 'Ética', 'Compromiso']
  })

  const partners = ref([
    {
      id: 1,
      name: 'Lic. Francisco Javier Menchaca Jurado',
      title: 'Licenciado en Derecho',
      specialties: ['Derecho Civil', 'Derecho Penal', 'Amparos'],
      email: 'solucioncsjcs@hotmail.com',
      phone: '55-6192-9409',
      image: '/images/partners/p2.png',
      description: 'Especialista en litigio con más de 15 años de experiencia defendiendo los derechos de nuestros clientes.'
    },
    {
      id: 2,
      name: 'Lic. María Julieta González Argüello',
      title: 'Licenciada en Derecho',
      specialties: ['Derecho Familiar', 'Derecho Laboral', 'Administrativo'],
      email: 'mjsolucionesjcs@hotmail.com',
      phone: '55-7429-5791',
      image: '/images/partners/p1.png',
      description: 'Experta en resolución de conflictos familiares y laborales con enfoque humanista y resultados comprobados.'
    }
  ])

  const services = ref([
    {
      id: 1,
      name: 'Civil',
      icon: 'bi-bank',
      description: 'Contratos, propiedades, arrendamientos y más',
      details: 'Asesoría completa en derecho civil, incluyendo contratos, propiedad, sucesiones y responsabilidad civil.'
    },
    {
      id: 2,
      name: 'Penal',
      icon: 'bi-shield-check',
      description: 'Defensa legal especializada',
      details: 'Representación y defensa en procesos penales, desde la investigación hasta el juicio.'
    },
    {
      id: 3,
      name: 'Laboral',
      icon: 'bi-briefcase',
      description: 'Derecho del trabajo',
      details: 'Protección de derechos laborales, despidos injustificados, prestaciones y conflictos laborales.'
    },
    {
      id: 4,
      name: 'Administrativo',
      icon: 'bi-building',
      description: 'Trámites y gestiones gubernamentales',
      details: 'Procedimientos administrativos, licencias, permisos y recursos ante autoridades.'
    },
    {
      id: 5,
      name: 'Familiar',
      icon: 'bi-people',
      description: 'Divorcios, pensiones, custodia',
      details: 'Solución integral de asuntos familiares: divorcios, pensión alimenticia, custodia y adopciones.'
    },
    {
      id: 6,
      name: 'Aduanal',
      icon: 'bi-truck',
      description: 'Comercio exterior',
      details: 'Asesoría en operaciones de comercio exterior, importaciones, exportaciones y regulaciones aduanales.'
    },
    {
      id: 7,
      name: 'Amparos',
      icon: 'bi-file-earmark-text',
      description: 'Protección constitucional',
      details: 'Defensa de garantías constitucionales mediante juicios de amparo contra actos de autoridad.'
    },
    {
      id: 8,
      name: 'Asesoría Fiscal',
      icon: 'bi-calculator',
      description: 'Impuestos y finanzas',
      details: 'Consultoría fiscal, planeación tributaria y defensa ante el SAT.'
    }
  ])

  const contact = ref({
    emails: ['solucioncsjcs@hotmail.com', 'mjsolucionesjcs@hotmail.com'],
    phones: ['55-6192-9409', '55-7429-5791', '55-4861-2916', '55-5958-7958'],
    officePhone: '55-5958-7958',
    coverage: 'Toda la República Mexicana',
    address: 'Ciudad de México, México',
    schedule: 'Lunes a Viernes: 9:00 AM - 7:00 PM<br>Sábados: 10:00 AM - 2:00 PM'
  })

  const testimonials = ref([
    {
      id: 1,
      name: 'Carlos Martínez',
      case: 'Derecho Laboral',
      text: 'Excelente servicio, recuperé todas mis prestaciones laborales gracias a su profesionalismo.',
      rating: 5
    },
    {
      id: 2,
      name: 'Ana López',
      case: 'Derecho Familiar',
      text: 'Me apoyaron en un proceso de divorcio muy difícil. Siempre fueron empáticos y efectivos.',
      rating: 5
    },
    {
      id: 3,
      name: 'Roberto Sánchez',
      case: 'Derecho Penal',
      text: 'Gracias a su defensa, mi caso se resolvió favorablemente. Los recomiendo ampliamente.',
      rating: 5
    }
  ])

  const socialMedia = ref({
    facebook: 'https://facebook.com/solucionjuridica',
    linkedin: 'https://linkedin.com/company/solucionjuridica',
    instagram: 'https://instagram.com/solucionjuridica',
    whatsapp: '5561929409'
  })

  // Getters
  const activeServices = computed(() => services.value)
  const primaryContact = computed(() => ({
    email: contact.value.emails[0],
    phone: contact.value.phones[0]
  }))
  const featuredPartners = computed(() => partners.value)

  // Actions
  function loadContent() {
    // Aquí se podría cargar contenido desde una API
    console.log('Contenido cargado')
  }

  function updatePartner(id, data) {
    const index = partners.value.findIndex(p => p.id === id)
    if (index !== -1) {
      partners.value[index] = { ...partners.value[index], ...data }
    }
  }

  function addTestimonial(testimonial) {
    const newId = Math.max(...testimonials.value.map(t => t.id), 0) + 1
    testimonials.value.push({ id: newId, ...testimonial })
  }

  function updateContactInfo(info) {
    contact.value = { ...contact.value, ...info }
  }

  return {
    // State
    firm,
    partners,
    services,
    contact,
    testimonials,
    socialMedia,
    // Getters
    activeServices,
    primaryContact,
    featuredPartners,
    // Actions
    loadContent,
    updatePartner,
    addTestimonial,
    updateContactInfo
  }
})
