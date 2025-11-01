/**
 * Facebook Pixel utility for tracking events
 */

declare global {
  interface Window {
    fbq: (
      action: string,
      event?: string,
      params?: Record<string, any>
    ) => void;
    _fbq?: any;
  }
}

/**
 * Initialize Facebook Pixel
 * @param pixelId - Facebook Pixel ID from environment variables
 */
export const initFacebookPixel = (pixelId: string): void => {
  if (!pixelId || typeof window === 'undefined') return;

  // Check if already initialized
  if ((window as any).fbq && (window as any).fbq.loaded) return;

  // Initialize Facebook Pixel
  (function (f: any, b: any, e: string, v: string, n: any, t: any, s: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js',
    window.fbq || function() {},
    document.createElement('script'),
    document.getElementsByTagName('script')[0]
  );

  // Initialize pixel with ID
  if ((window as any).fbq) {
    (window as any).fbq('init', pixelId);
    (window as any).fbq('track', 'PageView');
  }
};

/**
 * Track a Facebook Pixel event
 * @param eventName - Name of the event (e.g., 'ViewContent', 'AddToCart', 'Lead', 'Contact')
 * @param params - Optional parameters for the event
 */
export const trackFacebookEvent = (
  eventName: string,
  params?: Record<string, any>
): void => {
  if (typeof window === 'undefined' || !(window as any).fbq) {
    console.warn('Facebook Pixel not initialized');
    return;
  }

  (window as any).fbq('track', eventName, params);
};

/**
 * Track custom events
 */
export const trackPageView = () => {
  trackFacebookEvent('PageView');
};

export const trackViewContent = (contentName?: string, contentType?: string) => {
  trackFacebookEvent('ViewContent', {
    content_name: contentName,
    content_type: contentType,
  });
};

export const trackLead = (value?: number, currency = 'EUR') => {
  trackFacebookEvent('Lead', {
    value: value,
    currency: currency,
  });
};

export const trackContact = () => {
  trackFacebookEvent('Contact');
};

export const trackInitiateCheckout = (value?: number, currency = 'EUR') => {
  trackFacebookEvent('InitiateCheckout', {
    value: value,
    currency: currency,
  });
};

export const trackPurchase = (value: number, currency = 'EUR', contentIds?: string[]) => {
  trackFacebookEvent('Purchase', {
    value: value,
    currency: currency,
    content_ids: contentIds,
  });
};

export const trackAddToCart = (value?: number, currency = 'EUR') => {
  trackFacebookEvent('AddToCart', {
    value: value,
    currency: currency,
  });
};

export const trackSearch = (searchString?: string) => {
  trackFacebookEvent('Search', {
    search_string: searchString,
  });
};

