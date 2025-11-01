import { useEffect } from 'react';
import { initFacebookPixel } from '../utils/facebookPixel';

/**
 * Facebook Pixel Component
 * Initializes the Facebook Pixel on page load
 */
const FacebookPixel: React.FC = () => {
  useEffect(() => {
    const pixelId = (import.meta as any).env?.VITE_FACEBOOK_PIXEL_ID;
    
    if (pixelId) {
      initFacebookPixel(pixelId);
    } else {
      console.warn('Facebook Pixel ID not found in environment variables');
    }
  }, []);

  // Render noscript fallback for pixel tracking
  const pixelId = (import.meta as any).env?.VITE_FACEBOOK_PIXEL_ID;
  
  if (!pixelId) return null;

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
};

export default FacebookPixel;

