/**
 * Smooth scroll utility functions
 */

export const scrollToSection = (sectionId: string, offset: number = 80) => {
  console.log('🎯 scrollToSection called with:', sectionId);
  const element = document.getElementById(sectionId);
  console.log('📍 Element found:', element);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    console.log('📏 Element position:', elementPosition);
    console.log('📐 Offset position:', offsetPosition);
    console.log('🚀 Scrolling to position...');

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    console.log('✅ Scroll command executed');
  } else {
    console.error('❌ Element not found with ID:', sectionId);
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const scrollToContact = () => {
  console.log('🚀 scrollToContact called');
  scrollToSection('contact');
};

export const scrollToPricing = () => {
  scrollToSection('pricing');
};

export const scrollToEvents = () => {
  scrollToSection('events');
};

export const scrollToProcess = () => {
  scrollToSection('process');
};

export const scrollToTestimonials = () => {
  scrollToSection('testimonials');
};
