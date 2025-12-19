// Configuración de animaciones

// Easings personalizados
export const EASINGS = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
}

// Duraciones
export const DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 600,
  verySlow: 800
}

// Animaciones predefinidas para GSAP o CSS
export const ANIMATIONS = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: DURATIONS.normal
  },
  
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 },
    duration: DURATIONS.normal
  },
  
  slideInLeft: {
    from: { 
      opacity: 0,
      transform: 'translateX(-100px)' 
    },
    to: { 
      opacity: 1,
      transform: 'translateX(0)' 
    },
    duration: DURATIONS.slow
  },
  
  slideInRight: {
    from: { 
      opacity: 0,
      transform: 'translateX(100px)' 
    },
    to: { 
      opacity: 1,
      transform: 'translateX(0)' 
    },
    duration: DURATIONS.slow
  },
  
  slideInUp: {
    from: { 
      opacity: 0,
      transform: 'translateY(50px)' 
    },
    to: { 
      opacity: 1,
      transform: 'translateY(0)' 
    },
    duration: DURATIONS.slow
  },
  
  scaleIn: {
    from: { 
      opacity: 0,
      transform: 'scale(0.8)' 
    },
    to: { 
      opacity: 1,
      transform: 'scale(1)' 
    },
    duration: DURATIONS.normal
  },
  
  bounce: {
    keyframes: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-10px)' },
      { transform: 'translateY(0)' }
    ],
    duration: DURATIONS.slow
  }
}

// Función helper para aplicar animación con Intersection Observer
export const animateOnScroll = (element, animationName = 'fadeIn', threshold = 0.1) => {
  const animation = ANIMATIONS[animationName]
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold }
  )
  
  if (element) {
    observer.observe(element)
  }
  
  return observer
}

// Stagger animation (secuencial)
export const staggerAnimation = (elements, animation, delay = 100) => {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('animate')
    }, delay * index)
  })
}

export default {
  EASINGS,
  DURATIONS,
  ANIMATIONS,
  animateOnScroll,
  staggerAnimation
}
