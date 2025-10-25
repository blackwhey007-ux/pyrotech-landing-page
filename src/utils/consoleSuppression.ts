// Console error suppression for development
// This helps reduce noise from common development warnings

export const suppressConsoleWarnings = () => {
  if (process.env.NODE_ENV === 'development') {
    // Suppress common Three.js warnings
    const originalWarn = console.warn;
    console.warn = (...args) => {
      const message = args[0];
      if (typeof message === 'string') {
        // Suppress specific Three.js warnings
        if (
          message.includes('THREE.WebGLRenderer') ||
          message.includes('WebGL context lost') ||
          message.includes('WebGL: INVALID_OPERATION') ||
          message.includes('WebGL: INVALID_VALUE')
        ) {
          return;
        }
      }
      originalWarn.apply(console, args);
    };

    // Suppress React StrictMode double render warnings
    const originalError = console.error;
    console.error = (...args) => {
      const message = args[0];
      if (typeof message === 'string') {
        if (
          message.includes('Warning: ReactDOM.render is no longer supported') ||
          message.includes('Warning: componentWillReceiveProps') ||
          message.includes('Warning: componentWillMount')
        ) {
          return;
        }
      }
      originalError.apply(console, args);
    };
  }
};

export const restoreConsole = () => {
  // This would restore original console methods if needed
  // For now, we'll let the overrides persist
};

