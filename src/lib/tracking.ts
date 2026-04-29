/**
 * Utility for tracking events on Facebook and TikTok
 */

export const trackInitiateCheckout = () => {
  if (typeof window !== 'undefined') {
    // TikTok Event
    if ((window as any).ttq) {
      (window as any).ttq.track('InitiateCheckout');
    }
    
    // Facebook Event
    if ((window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }

    console.log('Tracking: InitiateCheckout');
  }
};
