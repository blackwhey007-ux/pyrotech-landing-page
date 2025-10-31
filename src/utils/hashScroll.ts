/**
 * Hash-based scroll utilities for section navigation
 * Enables browser history and back button support
 */

export const scrollToHash = (hash: string, offset: number = 80): void => {
  // Remove # if present
  const cleanHash = hash.startsWith('#') ? hash.slice(1) : hash;
  
  const element = document.getElementById(cleanHash);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const updateHashWithoutScroll = (hash: string): void => {
  const cleanHash = hash.startsWith('#') ? hash : `#${hash}`;
  
  if (window.history.pushState) {
    window.history.pushState(null, '', cleanHash);
  } else {
    // Fallback for older browsers
    window.location.hash = cleanHash;
  }
};

export const navigateToSection = (sectionId: string): void => {
  window.location.hash = `#${sectionId}`;
};

